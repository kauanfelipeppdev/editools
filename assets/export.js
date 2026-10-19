/* EXPORT — painel de exportação comum das ferramentas de animação.
   EXPORT.mount(el, { canvas, draw(t, transp), seconds(), name(), formats, res, transparent, audio() })
     → monta formato / fundo transparente / resolução / FPS / botão e devolve { settings(), busy }.
   EXPORT.encode({ canvas, draw, seconds, fps, fmt, transp, name, onProgress, audio }) → baixa o arquivo.
   MP4 e WEBM saem quadro a quadro pelo WebCodecs (tempo exato, pode trocar de aba); sem ele, grava em tempo real. */
(function () {
  const even = (n) => n - (n % 2);
  let Mp4, Webm;
  const libs = () => Promise.all([
    Mp4 || import('https://cdn.jsdelivr.net/npm/mp4-muxer@5.1.3/build/mp4-muxer.mjs').then((m) => (Mp4 = m)),
    Webm || import('https://cdn.jsdelivr.net/npm/webm-muxer@5.0.3/build/webm-muxer.mjs').then((m) => (Webm = m)),
  ]);
  function loadZip() {
    if (window.JSZip) return Promise.resolve();
    return new Promise((r, j) => { const s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'; s.onload = r; s.onerror = j; document.head.appendChild(s); });
  }

  const FORMATS = {
    mp4: 'MP4 (fundo sólido)',
    webm: 'WEBM com transparência',
    png: 'Sequência PNG (.zip, transparente)',
  };
  const RES = {
    '1920x1080': '1920×1080',
    '1080x1920': '1080×1920 (vertical)',
    '1080x1080': '1080×1080',
    '1280x720': '1280×720',
    '3840x2160': '3840×2160 (4K)',
  };

  async function videoConfig(fmt, W, H, fps, transp) {
    const codecs = fmt === 'mp4' ? ['avc1.640033', 'avc1.640028', 'avc1.4d0028', 'avc1.42001f'] : ['vp09.00.41.08', 'vp09.00.10.08', 'vp8'];
    for (const codec of codecs) {
      const c = { codec, width: W, height: H, bitrate: Math.min(50e6, W * H * fps * .15), framerate: fps, ...(transp ? { alpha: 'keep' } : {}) };
      try { if ((await VideoEncoder.isConfigSupported(c)).supported) return c; } catch {}
    }
    return null;
  }

  async function audioConfig(fmt, buffer) {
    if (!buffer || !window.AudioEncoder) return null;
    const ch = Math.min(2, buffer.numberOfChannels);
    const opts = fmt === 'mp4'
      ? [['mp4a.40.2', 'aac', buffer.sampleRate], ['mp4a.40.2', 'aac', 48000], ['opus', 'opus', 48000]]
      : [['opus', 'A_OPUS', 48000]];
    for (const [codec, mux, sampleRate] of opts) {
      const c = { codec, sampleRate, numberOfChannels: ch, bitrate: 192000 };
      try { if ((await AudioEncoder.isConfigSupported(c)).supported) return { c, mux }; } catch {}
    }
    return null;
  }

  async function resample(buffer, rate, ch) {
    if (buffer.sampleRate === rate && buffer.numberOfChannels === ch) return buffer;
    const oc = new OfflineAudioContext(ch, Math.ceil(buffer.duration * rate), rate);
    const s = oc.createBufferSource(); s.buffer = buffer; s.connect(oc.destination); s.start();
    return oc.startRendering();
  }

  /** Recorta um AudioBuffer de `from` até `from + seconds`. */
  function sliceAudio(buffer, from, seconds) {
    const sr = buffer.sampleRate, a = Math.floor(from * sr), n = Math.max(1, Math.min(buffer.length - a, Math.ceil(seconds * sr)));
    const out = new AudioBuffer({ length: n, numberOfChannels: buffer.numberOfChannels, sampleRate: sr });
    for (let c = 0; c < buffer.numberOfChannels; c++) out.copyToChannel(buffer.getChannelData(c).subarray(a, a + n), c);
    return out;
  }

  async function encode({ canvas, draw, seconds, fps = 30, fmt = 'mp4', transp = false, name = 'video', onProgress = () => {}, audio = null }) {
    const n = Math.max(1, Math.ceil(seconds * fps));
    if (fmt === 'png') {
      await loadZip();
      const zip = new JSZip();
      for (let i = 0; i < n; i++) {
        await draw(i / fps, transp, i);
        zip.file(`${name}_${String(i).padStart(5, '0')}.png`, await OS.canvasBlob(canvas));
        onProgress(i / n, `quadro ${i + 1} de ${n}`);
      }
      onProgress(1, 'compactando…');
      return OS.download(await zip.generateAsync({ type: 'blob' }), name + '-png.zip');
    }
    await draw(0, transp, 0); // o primeiro quadro define o tamanho do canvas
    const W = even(canvas.width), H = even(canvas.height);
    const vc = window.VideoEncoder ? await videoConfig(fmt, W, H, fps, transp) : null;
    if (!vc) return realtime({ canvas, draw, seconds, fps, fmt, transp, name, onProgress, audio });
    await libs();
    const isMp4 = fmt === 'mp4';
    const ac = await audioConfig(fmt, audio);
    const target = isMp4 ? new Mp4.ArrayBufferTarget() : new Webm.ArrayBufferTarget();
    const muxer = isMp4
      ? new Mp4.Muxer({ target, video: { codec: 'avc', width: W, height: H }, ...(ac ? { audio: { codec: ac.mux, numberOfChannels: ac.c.numberOfChannels, sampleRate: ac.c.sampleRate } } : {}), fastStart: 'in-memory', firstTimestampBehavior: 'offset' })
      : new Webm.Muxer({ target, video: { codec: vc.codec.startsWith('vp8') ? 'V_VP8' : 'V_VP9', width: W, height: H, frameRate: fps, alpha: transp }, ...(ac ? { audio: { codec: 'A_OPUS', numberOfChannels: ac.c.numberOfChannels, sampleRate: ac.c.sampleRate } } : {}), firstTimestampBehavior: 'offset' });
    let err = null;
    const enc = new VideoEncoder({ output: (c, m) => muxer.addVideoChunk(c, m), error: (e) => (err = e) });
    enc.configure(vc);
    const src = W === canvas.width && H === canvas.height ? canvas : Object.assign(document.createElement('canvas'), { width: W, height: H });
    for (let i = 0; i < n; i++) {
      if (err) throw err;
      await draw(i / fps, transp, i);
      if (src !== canvas) { const x = src.getContext('2d'); x.clearRect(0, 0, W, H); x.drawImage(canvas, 0, 0); }
      const f = new VideoFrame(src, { timestamp: Math.round(i * 1e6 / fps), duration: Math.round(1e6 / fps), ...(transp ? {} : { alpha: 'discard' }) });
      enc.encode(f, { keyFrame: i % (fps * 2) === 0 });
      f.close();
      if (enc.encodeQueueSize > 6) await new Promise((r) => setTimeout(r, 4));
      if (i % 3 === 0) onProgress(i / n * (ac ? .9 : 1), `codificando quadro ${i + 1} de ${n}`);
    }
    await enc.flush();
    if (err) throw err;
    if (ac) {
      onProgress(.92, 'codificando o áudio…');
      const buf = await resample(sliceAudio(audio, 0, seconds), ac.c.sampleRate, ac.c.numberOfChannels);
      const aenc = new AudioEncoder({ output: (c, m) => muxer.addAudioChunk(c, m), error: (e) => (err = e) });
      aenc.configure(ac.c);
      const chs = [...Array(ac.c.numberOfChannels)].map((_, c) => buf.getChannelData(c));
      const block = 4096;
      for (let i = 0; i < buf.length; i += block) {
        const len = Math.min(block, buf.length - i);
        const data = new Float32Array(len * chs.length);
        chs.forEach((d, c) => data.set(d.subarray(i, i + len), c * len));
        const ad = new AudioData({ format: 'f32-planar', sampleRate: buf.sampleRate, numberOfFrames: len, numberOfChannels: chs.length, timestamp: Math.round(i / buf.sampleRate * 1e6), data });
        aenc.encode(ad); ad.close();
        if (aenc.encodeQueueSize > 20) await new Promise((r) => setTimeout(r, 2));
      }
      await aenc.flush();
      if (err) throw err;
    }
    muxer.finalize();
    onProgress(1, 'pronto!');
    OS.download(new Blob([target.buffer], { type: isMp4 ? 'video/mp4' : 'video/webm' }), name + (isMp4 ? '.mp4' : '.webm'));
  }

  /** Sem WebCodecs: desenha em tempo real e grava com MediaRecorder. */
  async function realtime({ canvas, draw, seconds, fps, fmt, transp, name, onProgress, audio }) {
    onProgress(0, 'gravando em tempo real (não troque de aba)…');
    const stream = canvas.captureStream(fps);
    let ctx, srcNode;
    if (audio) {
      ctx = new AudioContext();
      const dest = ctx.createMediaStreamDestination();
      srcNode = ctx.createBufferSource(); srcNode.buffer = audio; srcNode.connect(dest);
      dest.stream.getAudioTracks().forEach((t) => stream.addTrack(t));
    }
    const webm = ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'].find((m) => window.MediaRecorder && MediaRecorder.isTypeSupported(m));
    const mimeType = fmt === 'mp4' ? OS.videoMime() : webm;
    const mr = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 16e6 });
    const chunks = [];
    mr.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    mr.start(250);
    srcNode && srcNode.start();
    const t0 = performance.now();
    await new Promise((r) => {
      const step = () => {
        const t = (performance.now() - t0) / 1000;
        draw(Math.min(t, seconds), transp, Math.floor(t * fps));
        onProgress(t / seconds);
        t < seconds ? requestAnimationFrame(step) : r();
      };
      step();
    });
    await new Promise((r) => { mr.onstop = r; mr.stop(); });
    ctx && ctx.close();
    const type = mr.mimeType || 'video/webm';
    OS.download(new Blob(chunks, { type }), name + (type.includes('mp4') ? '.mp4' : '.webm'));
  }

  /** Monta o painel de exportação dentro de `el`. */
  function mount(el, o) {
    const formats = o.formats || ['mp4', 'webm', 'png'];
    const res = o.res || Object.keys(RES);
    el.innerHTML = `<fieldset><legend>Exportar</legend><div class="stack">
      <select data-x="fmt">${formats.map((f) => `<option value="${f}">${FORMATS[f]}</option>`).join('')}</select>
      ${o.transparent === false ? '' : `<div class="field-row"><input type="checkbox" data-x="transp" id="xTransp"${o.transparent ? ' checked' : ''}><label for="xTransp">Fundo transparente</label></div>`}
      <div class="two">
        ${o.fixedSize ? '' : `<label class="field"><span>Resolução</span><select data-x="res">${res.map((r) => `<option value="${r}">${RES[r] || r.replace('x', '×')}</option>`).join('')}</select></label>`}
        <label class="field"><span>FPS</span><select data-x="fps"><option>24</option><option selected>30</option><option>60</option></select></label>
      </div>
      <p class="hint" data-x="hint"></p>
    </div></fieldset>
    <button data-x="go">🎬 ${o.label || 'Gerar vídeo'}</button>
    <progress data-x="prog" max="1" value="0" hidden style="width:100%"></progress>
    <div class="status-line" data-x="st">&gt; o download começa sozinho quando terminar.</div>`;
    el.classList.add('stack');
    const q = (k) => el.querySelector(`[data-x=${k}]`);
    if (o.defaultRes && q('res')) q('res').value = o.defaultRes;
    if (o.transparent && formats.includes('webm')) q('fmt').value = 'webm';
    const api = {
      busy: false,
      settings() {
        const [W, H] = o.fixedSize ? o.fixedSize() : q('res').value.split('x').map(Number);
        const fmt = q('fmt').value;
        return { fmt, W, H, fps: +q('fps').value, transp: !!q('transp')?.checked && fmt !== 'mp4' };
      },
      status: (s) => (q('st').textContent = '> ' + s),
      el: q,
    };
    const hint = () => {
      const f = q('fmt').value, tr = q('transp');
      q('hint').textContent = f === 'mp4' && tr?.checked ? 'MP4 não guarda transparência: o fundo sai sólido. Use WEBM ou PNG.'
        : f === 'webm' ? 'WEBM VP9 com canal alfa: Premiere, After Effects e CapCut leem. Melhor no Chrome/Edge.'
        : f === 'png' ? 'Uma imagem por quadro, dentro de um .zip. Importe como sequência no editor.'
        : 'H.264, abre em qualquer lugar.';
      o.onSettings && o.onSettings(api.settings());
    };
    q('fmt').onchange = () => { if (q('transp') && q('fmt').value !== 'mp4') q('transp').checked = true; hint(); };
    el.addEventListener('change', hint);
    hint();
    q('go').onclick = async () => {
      if (api.busy) return;
      const s = api.settings();
      api.busy = true; q('go').disabled = true; q('prog').hidden = false;
      try {
        if (o.prepare) await o.prepare(s);
        await encode({
          canvas: o.canvas, fps: s.fps, fmt: s.fmt, transp: s.transp, seconds: o.seconds(), name: OS.slug(o.name ? o.name() : 'video'),
          audio: o.audio ? o.audio() : null,
          draw: (t, transp, i) => o.draw(t, transp, i, true),
          onProgress: (p, msg) => { q('prog').value = p; if (msg) api.status(msg); },
        });
        api.status('pronto! download iniciado.');
      } catch (e) {
        console.error(e);
        api.status('erro: ' + (e.message || e));
        OS.dialog('Erro', e.userMsg || 'Não consegui gerar o vídeo nesse formato. Tente outro formato ou o Chrome/Edge.', e.userMsg ? '⚠️' : '❌');
      }
      api.busy = false; q('go').disabled = false; q('prog').hidden = true;
      o.after && o.after();
    };
    return api;
  }

  /** Easings usados pelas ferramentas de animação. */
  const EASE = {
    linear: (t) => t,
    out: (t) => 1 - Math.pow(1 - t, 3),
    in: (t) => t * t * t,
    inout: (t) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    back: (t) => { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); },
    elastic: (t) => (t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - .75) * (2 * Math.PI / 3)) + 1),
    bounce: (t) => { const n = 7.5625, d = 2.75; if (t < 1 / d) return n * t * t; if (t < 2 / d) return n * (t -= 1.5 / d) * t + .75; if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + .9375; return n * (t -= 2.625 / d) * t + .984375; },
  };
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  /** Fontes do Google Fonts carregadas pelas páginas de animação: [nome, pesos]. */
  const FONTS = [['Inter', '400,700,900'], ['Montserrat', '400,700,900'], ['Poppins', '400,700,900'], ['Anton', '400'], ['Bebas Neue', '400'], ['Bangers', '400'], ['Bungee', '400'], ['Luckiest Guy', '400'], ['Fredoka', '500,700'], ['Permanent Marker', '400'], ['Cinzel', '700'], ['Orbitron', '700,900'], ['Press Start 2P', '400'], ['VT323', '400'], ['Special Elite', '400'], ['Roboto Mono', '400,700'], ['Arial', ''], ['Impact', ''], ['Georgia', ''], ['Courier New', '']];
  const fontOptions = (cur) => FONTS.map(([f]) => `<option${f === cur ? ' selected' : ''}>${f}</option>`).join('');
  const loadFont = (weight, family, text = 'Aa0') => document.fonts.load(`${weight} 64px "${family}"`, text).catch(() => {});

  /** Aplica { id: valor } nos campos da página e avisa os ouvintes. */
  function setValues(obj) {
    for (const [k, v] of Object.entries(obj)) {
      const el = document.getElementById(k);
      if (!el) continue;
      if (el.type === 'checkbox' || el.type === 'radio') el.checked = !!v; else el.value = v;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  /** Lê os campos { id } como número quando dá. */
  function values(ids) {
    const o = {};
    for (const k of ids) {
      const el = document.getElementById(k);
      if (!el) continue;
      o[k] = el.type === 'checkbox' || el.type === 'radio' ? el.checked : el.type === 'range' || el.type === 'number' ? +el.value : el.value;
    }
    return o;
  }

  /** Aleatório estável por índice (o mesmo quadro sai igual na prévia e no vídeo). */
  const rnd = (i, k = 0) => { const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return x - Math.floor(x); };

  /** Monta os botões de modelos prontos. */
  function presets(el, list, apply) {
    list.forEach((p) => {
      const b = document.createElement('button');
      b.innerHTML = `<b>${p.n}</b><small>${p.d || ''}</small>`;
      b.onclick = () => apply(p);
      el.appendChild(b);
    });
  }

  window.EXPORT = { mount, encode, sliceAudio, EASE, clamp, RES, FONTS, fontOptions, loadFont, setValues, values, rnd, presets };
})();
