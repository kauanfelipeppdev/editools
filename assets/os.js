/* ImAPNG OS — base compartilhada: temas, janelas arrastáveis, barra de tarefas e utilitários. */
(function () {
  const THEMES = {
    '98': { name: 'Windows 98', css: 'https://unpkg.com/98.css@0.1.21/dist/98.css' },
    xp: { name: 'Windows XP', css: 'https://unpkg.com/xp.css@0.2.6/dist/XP.css' },
    '7': { name: 'Windows 7 (Aero)', css: 'https://unpkg.com/7.css@0.16.0/dist/7.css' },
  };

  const TOOLS = [
    { file: 'removedor.html', icon: '✂️', name: 'removedor_de_fundo.exe', desc: 'tira o fundo de imagens com IA, direto no navegador' },
    { file: 'botoes.html', icon: '🔘', name: 'criador_de_botoes.exe', desc: 'monte um botão do seu jeito e baixe em PNG' },
    { file: 'letras.html', icon: '✉️', name: 'gerador_de_letras.exe', desc: 'escreva com letras recortadas de revista' },
    { file: 'dvdficar.html', icon: '📀', name: 'dvdficar.exe', desc: 'sua logo quicando na tela de descanso do DVD' },
    { file: 'vhs.html', icon: '📼', name: 'modulador_vhs.exe', desc: 'efeito de fita VHS em foto e vídeo' },
    { file: 'texto3d.html', icon: '🧊', name: 'texto_3d.exe', desc: 'textos em 3D com vários materiais' },
    { file: 'peixe.html', icon: '🐟', name: 'olho_de_peixe.exe', desc: 'lente olho de peixe anos 90/2000' },
    { file: 'camera.html', icon: '📷', name: 'camera_digital.exe', desc: 'simula 8 câmeras digitais antigas' },
    { file: 'audio.html', icon: '🎙️', name: 'audio_analogico.exe', desc: 'deixa seu áudio com cara de rádio, fita e VHS' },
    { file: 'pixelador.html', icon: '👾', name: 'pixelador.exe', desc: 'transforma imagens e vídeos em pixel art' },
    { file: 'popup.html', icon: '🪟', name: 'criador_de_popup.exe', desc: 'pop-ups estilo Windows antigo em PNG' },
    { file: 'petpet.html', icon: '🫳', name: 'petpet.exe', desc: 'GIF de uma mãozinha fazendo carinho na sua imagem' },
    { file: 'contador.html', icon: '🔢', name: 'contador_de_numeros.exe', desc: 'vídeo de número subindo, com fundo transparente' },
    { file: 'gradiente.html', icon: '🌈', name: 'gradientes_animados.exe', desc: 'gradientes que se mexem, exporta em vídeo' },
    { file: 'texturas.html', icon: '📜', name: 'texturas_de_papel.exe', desc: 'texturas de papel animadas em stop motion' },
    { file: 'tv.html', icon: '📺', name: 'tv_de_tubo.exe', desc: 'sua mídia passando numa TV de tubo' },
    { file: 'scripts.html', icon: '⚙️', name: 'scripts.exe', desc: 'scripts para After Effects' },
    { file: 'links.html', icon: '🔗', name: 'links.exe', desc: 'links, conversor MP4 → MP3 e mais' },
  ];

  const store = {
    get(k, d) { try { const v = localStorage.getItem('imapng:' + k); return v == null ? d : v; } catch { return d; } },
    set(k, v) { try { localStorage.setItem('imapng:' + k, v); } catch {} },
  };

  function setTheme(t) {
    if (!THEMES[t]) t = 'xp';
    document.documentElement.dataset.theme = t;
    const link = document.getElementById('theme-css');
    if (link && link.getAttribute('href') !== THEMES[t].css) link.setAttribute('href', THEMES[t].css);
    store.set('theme', t);
    document.dispatchEvent(new CustomEvent('themechange', { detail: t }));
  }
  setTheme(store.get('theme', 'xp'));

  // ---------- Janelas ----------
  let zTop = 10;
  const isDesktop = () => window.matchMedia('(min-width: 761px) and (pointer: fine)').matches;

  function focusWin(win) {
    win.style.zIndex = ++zTop;
    document.querySelectorAll('.window.active').forEach((w) => w !== win && w.classList.remove('active'));
    win.classList.add('active');
    renderTasks();
  }

  function buildWindow(win) {
    if (win.dataset.built) return;
    win.dataset.built = '1';
    const title = win.dataset.title || '';
    const bar = document.createElement('div');
    bar.className = 'title-bar';
    bar.innerHTML = `<div class="title-bar-text"></div><div class="title-bar-controls">
      <button aria-label="Minimize" title="Minimizar"></button><button aria-label="Maximize" title="Maximizar"></button><button aria-label="Close" title="Fechar"></button></div>`;
    bar.firstElementChild.textContent = (win.dataset.icon ? win.dataset.icon + ' ' : '') + title;
    win.prepend(bar);
    const [bMin, bMax, bClose] = bar.querySelectorAll('button');
    bMin.onclick = () => { win.classList.add('min'); renderTasks(); };
    bMax.onclick = () => { win.classList.toggle('max'); win.style.translate = ''; document.dispatchEvent(new Event('winresize')); };
    bClose.onclick = () => {
      if (win.classList.contains('app')) location.href = 'index.html';
      else { win.classList.add('closed'); renderTasks(); }
    };
    win.addEventListener('pointerdown', () => focusWin(win));

    let drag = null;
    bar.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || !isDesktop() || win.classList.contains('max')) return;
      const [tx, ty] = (win.style.translate || '0px 0px').split(' ').map(parseFloat);
      drag = { x: e.clientX - (tx || 0), y: e.clientY - (ty || 0) };
      bar.setPointerCapture(e.pointerId);
      win.classList.add('dragging');
    });
    bar.addEventListener('pointermove', (e) => {
      if (!drag) return;
      win.style.translate = `${e.clientX - drag.x}px ${Math.max(e.clientY - drag.y, -win.offsetTop)}px`;
    });
    const end = () => { drag = null; win.classList.remove('dragging'); };
    bar.addEventListener('pointerup', end);
    bar.addEventListener('pointercancel', end);
    bar.addEventListener('dblclick', (e) => { if (!e.target.closest('button')) bMax.click(); });
  }

  function openWin(id) {
    const w = document.getElementById(id);
    if (!w) return;
    w.classList.remove('closed', 'min');
    focusWin(w);
  }

  // ---------- Barra de tarefas ----------
  let taskList;
  function renderTasks() {
    if (!taskList) return;
    taskList.innerHTML = '';
    document.querySelectorAll('.window[data-title]:not(.closed)').forEach((w) => {
      const b = document.createElement('button');
      b.className = 'task' + (w.classList.contains('active') && !w.classList.contains('min') ? ' on' : '');
      b.textContent = (w.dataset.icon || '🗔') + ' ' + w.dataset.title;
      b.onclick = () => {
        if (w.classList.contains('min')) { w.classList.remove('min'); focusWin(w); }
        else if (w.classList.contains('active')) { w.classList.add('min'); renderTasks(); }
        else focusWin(w);
      };
      taskList.appendChild(b);
    });
  }

  function buildTaskbar() {
    const bar = document.createElement('nav');
    bar.className = 'taskbar';
    bar.innerHTML = `
      <button class="start" aria-haspopup="menu" aria-expanded="false"><span class="orb"></span><b>Iniciar</b></button>
      <div class="tasks"></div>
      <div class="tray"><span class="tray-theme" title="Trocar tema">🎨</span><time></time></div>
      <div class="startmenu" role="menu" hidden>
        <div class="sm-head"><span class="sm-avatar">🖼️</span><b>ImAPNG</b></div>
        <div class="sm-body">
          <a href="index.html" class="sm-item" role="menuitem"><span>🏠</span>Área de trabalho</a>
          <div class="sm-sep"></div>
          ${TOOLS.map((t) => `<a href="${t.file}" class="sm-item" role="menuitem"><span>${t.icon}</span>${t.name}</a>`).join('')}
          <div class="sm-sep"></div>
          <div class="sm-label">Tema</div>
          ${Object.entries(THEMES).map(([k, v]) => `<button class="sm-item" data-theme-pick="${k}" role="menuitem"><span>🎨</span>${v.name}</button>`).join('')}
        </div>
      </div>`;
    document.body.appendChild(bar);
    taskList = bar.querySelector('.tasks');
    const start = bar.querySelector('.start'), menu = bar.querySelector('.startmenu');
    const toggle = (open) => { menu.hidden = !open; start.setAttribute('aria-expanded', open); start.classList.toggle('on', open); };
    start.onclick = (e) => { e.stopPropagation(); toggle(menu.hidden); };
    document.addEventListener('click', (e) => { if (!e.target.closest('.startmenu')) toggle(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });
    bar.querySelectorAll('[data-theme-pick]').forEach((b) => (b.onclick = () => { setTheme(b.dataset.themePick); toggle(false); }));
    const order = Object.keys(THEMES);
    bar.querySelector('.tray-theme').onclick = () => setTheme(order[(order.indexOf(document.documentElement.dataset.theme) + 1) % order.length]);
    const clock = bar.querySelector('time');
    const tick = () => (clock.textContent = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    tick(); setInterval(tick, 10000);
    renderTasks();
  }

  // ---------- Utilitários ----------
  function download(blob, name) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }

  const canvasBlob = (c, type = 'image/png', q) => new Promise((r) => c.toBlob(r, type, q));

  function pickFile(accept) {
    return new Promise((resolve) => {
      const i = document.createElement('input');
      i.type = 'file'; i.accept = accept || '*/*';
      i.onchange = () => resolve(i.files[0] || null);
      i.click();
    });
  }

  /** Carrega imagem ou vídeo. Retorna { el, w, h, video, url }. */
  function loadMedia(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      if (file.type.startsWith('video/')) {
        const v = document.createElement('video');
        v.muted = true; v.loop = true; v.playsInline = true; v.crossOrigin = 'anonymous';
        v.onloadeddata = () => { v.play().catch(() => {}); resolve({ el: v, w: v.videoWidth, h: v.videoHeight, video: true, url, file }); };
        v.onerror = () => reject(new Error('Vídeo não suportado'));
        v.src = url;
      } else {
        const img = new Image();
        img.onload = () => resolve({ el: img, w: img.naturalWidth, h: img.naturalHeight, video: false, url, file });
        img.onerror = () => reject(new Error('Imagem não suportada'));
        img.src = url;
      }
    });
  }

  /** Liga arrastar/soltar e Ctrl+V a um callback de arquivo. */
  function dropZone(el, onFile, accept = /^(image|video)\//) {
    const ok = (f) => f && accept.test(f.type);
    el.addEventListener('dragover', (e) => { e.preventDefault(); el.classList.add('over'); });
    el.addEventListener('dragleave', () => el.classList.remove('over'));
    el.addEventListener('drop', (e) => {
      e.preventDefault(); el.classList.remove('over');
      const f = [...e.dataTransfer.files].find(ok);
      if (f) onFile(f);
    });
    window.addEventListener('paste', (e) => {
      if (e.target.closest && e.target.closest('input, textarea')) return;
      const f = [...(e.clipboardData?.items || [])].filter((i) => i.kind === 'file').map((i) => i.getAsFile()).find(ok);
      if (f) onFile(f);
    });
  }

  function videoMime() {
    const list = ['video/mp4;codecs=avc1.42E01E,mp4a.40.2', 'video/mp4', 'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'];
    return list.find((m) => window.MediaRecorder && MediaRecorder.isTypeSupported(m)) || '';
  }

  /** Grava um canvas (com áudio opcional). rec.stop() → Promise<{blob, ext}> */
  function recordCanvas(canvas, { fps = 30, audio = null, bitrate = 12e6 } = {}) {
    const stream = canvas.captureStream(fps);
    if (audio) audio.getAudioTracks().forEach((t) => stream.addTrack(t));
    const mimeType = videoMime();
    const rec = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: bitrate });
    const chunks = [];
    rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    rec.start(250);
    return {
      stop: () => new Promise((r) => {
        rec.onstop = () => {
          const type = rec.mimeType || mimeType || 'video/webm';
          r({ blob: new Blob(chunks, { type }), ext: type.includes('mp4') ? 'mp4' : 'webm' });
        };
        rec.stop();
      }),
    };
  }

  /** Caixa de diálogo retrô (sem alert do navegador). */
  function dialog(title, msg, icon = 'ℹ️') {
    const d = document.createElement('div');
    d.className = 'window dialog';
    d.dataset.title = title;
    d.innerHTML = `<div class="window-body"><div class="dlg"><span class="dlg-icon">${icon}</span><p></p></div><div class="btns end"><button class="default">OK</button></div></div>`;
    d.querySelector('p').textContent = msg;
    const veil = document.createElement('div');
    veil.className = 'veil';
    veil.appendChild(d);
    document.body.appendChild(veil);
    buildWindow(d);
    focusWin(d);
    const close = () => { veil.remove(); renderTasks(); };
    d.querySelector('.btns button').onclick = close;
    d.querySelector('[aria-label=Close]').onclick = close;
    d.querySelector('.btns button').focus();
  }

  /** Mostra o valor de cada <input type=range data-out> num <output> ao lado. */
  function bindOutputs(root = document) {
    root.querySelectorAll('input[type=range]').forEach((r) => {
      const out = r.parentElement.querySelector('output') || r.nextElementSibling;
      if (!out || out.tagName !== 'OUTPUT') return;
      const suf = out.dataset.suffix || '';
      const upd = () => (out.textContent = r.value + suf);
      r.addEventListener('input', upd); upd();
      // duplo clique no rótulo reseta
      const lab = r.closest('label') || r.parentElement;
      lab.addEventListener('dblclick', (e) => { if (e.target === r) return; r.value = r.defaultValue; r.dispatchEvent(new Event('input', { bubbles: true })); });
    });
  }

  function slug(s) { return (s || 'arquivo').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\w-]+/g, '-').replace(/^-|-$/g, '').toLowerCase() || 'arquivo'; }

  window.OS = { THEMES, TOOLS, setTheme, store, download, canvasBlob, pickFile, loadMedia, dropZone, recordCanvas, videoMime, dialog, bindOutputs, openWin, focusWin, slug };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.window[data-title]').forEach(buildWindow);
    if (!document.querySelector('link[rel=icon]')) {
      const ico = document.querySelector('.window.app')?.dataset.icon || '🖼️';
      const l = document.createElement('link');
      l.rel = 'icon';
      l.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${ico}</text></svg>`;
      document.head.appendChild(l);
    }
    document.querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => openWin(b.dataset.open)));
    if (!document.body.hasAttribute('data-no-taskbar')) buildTaskbar();
    const first = document.querySelector('.window.app') || document.querySelector('.window[data-title]:not(.closed)');
    if (first) focusWin(first);
    bindOutputs();
  });
})();
