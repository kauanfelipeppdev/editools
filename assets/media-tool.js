/* MediaTool — esqueleto comum das ferramentas de efeito em foto/vídeo.
   new MediaTool({ preview, canvas, frag, uniforms(), size(w,h) → [w,h], onFrame(), name })  */
(function () {
  function demoCanvas(w = 1280, h = 720) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const x = c.getContext('2d');
    const sky = x.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#ff6fb5'); sky.addColorStop(.55, '#ffb347'); sky.addColorStop(1, '#2b1055');
    x.fillStyle = sky; x.fillRect(0, 0, w, h);
    x.fillStyle = '#fff6c9';
    x.beginPath(); x.arc(w * .5, h * .58, h * .22, 0, Math.PI * 2); x.fill();
    x.fillStyle = '#2b1055';
    for (let i = 0; i < 7; i++) x.fillRect(w * .28, h * .52 + i * h * .045, w * .44, h * .018 + i * 2);
    x.fillStyle = '#1a0933';
    x.fillRect(0, h * .78, w, h * .22);
    x.strokeStyle = '#ff4fd8'; x.lineWidth = 3;
    for (let i = -12; i <= 12; i++) { x.beginPath(); x.moveTo(w / 2 + i * 20, h * .78); x.lineTo(w / 2 + i * 160, h); x.stroke(); }
    for (let j = 0; j < 6; j++) { const y = h * .78 + Math.pow(j / 6, 1.8) * h * .22; x.beginPath(); x.moveTo(0, y); x.lineTo(w, y); x.stroke(); }
    const bars = ['#c0c0c0', '#c0c000', '#00c0c0', '#00c000', '#c000c0', '#c00000', '#0000c0'];
    bars.forEach((b, i) => { x.fillStyle = b; x.fillRect(24 + i * 34, 24, 34, 60); });
    x.font = `bold ${h * .09}px Tahoma, sans-serif`;
    x.textAlign = 'center'; x.fillStyle = '#fff'; x.shadowColor = '#000'; x.shadowBlur = 12;
    x.fillText('EdiTools', w / 2, h * .2);
    return c;
  }

  class MediaTool {
    constructor(o) {
      this.o = o;
      this.preview = o.preview;
      this.canvas = o.canvas;
      this.fx = GLFX.create(this.canvas, o.frag);
      this.media = null;
      this.paused = false;
      this.sound = false;
      this.rec = null;
      this.placeholder = this.preview.querySelector('.placeholder');
      if (this.placeholder) this.placeholder.onclick = () => this.pick();
      OS.dropZone(this.preview, (f) => this.load(f));
      this.canvas.style.display = 'none';
      const loop = () => { this.frame(); requestAnimationFrame(loop); };
      requestAnimationFrame(loop);
    }

    async pick() {
      const f = await OS.pickFile(this.o.accept || 'image/*,video/*');
      if (f) this.load(f);
    }

    async load(file) {
      try {
        const m = await OS.loadMedia(file);
        this.setMedia(m);
      } catch (e) { OS.dialog('Erro', e.message || 'Não consegui abrir esse arquivo.', '❌'); }
    }

    useDemo() { const c = demoCanvas(); this.setMedia({ el: c, w: c.width, h: c.height, video: false, demo: true, name: 'exemplo' }); }

    setMedia(m) {
      if (this.media?.video && this.media !== m) { this.media.el.pause(); URL.revokeObjectURL(this.media.url); }
      this.media = m;
      this.name = OS.slug((m.file?.name || m.name || 'imagem').replace(/\.[^.]+$/, ''));
      const [w, h] = this.o.size ? this.o.size(m.w, m.h) : MediaTool.fit(m.w, m.h, this.o.max || 1920);
      this.canvas.width = w; this.canvas.height = h;
      this.fx.setSource(m.el);
      if (this.o.nearest) this.fx.nearest('u_tex', true);
      if (this.placeholder) this.placeholder.style.display = 'none';
      this.canvas.style.display = 'block';
      this.paused = false;
      if (m.video) { m.el.muted = !this.sound; m.el.play().catch(() => {}); }
      this.o.onLoad && this.o.onLoad(m);
      this.frame(true);
    }

    static fit(w, h, max) { const k = Math.min(1, max / Math.max(w, h)); return [Math.round(w * k), Math.round(h * k)]; }

    frame(force) {
      if (!this.media) return;
      if (this.paused && !force && !this.o.animateWhenPaused) return;
      if (this.o.beforeRender) this.o.beforeRender();
      this.fx.render(this.o.uniforms ? this.o.uniforms() : {});
      this.o.onFrame && this.o.onFrame();
    }

    togglePause() {
      if (!this.media) return false;
      this.paused = !this.paused;
      if (this.media.video) this.paused ? this.media.el.pause() : this.media.el.play();
      return this.paused;
    }
    stop() {
      if (!this.media?.video) return;
      this.media.el.pause(); this.media.el.currentTime = 0; this.paused = true;
      setTimeout(() => this.frame(true), 60);
    }
    toggleSound() {
      this.sound = !this.sound;
      if (this.media?.video) { this.ensureAudio(); this.media.el.muted = !this.sound; }
      return this.sound;
    }
    ensureAudio() {
      const v = this.media?.el;
      if (!v || v.tagName !== 'VIDEO' || v._dest) return v?._dest;
      try {
        const ac = this._ac || (this._ac = new AudioContext());
        const src = ac.createMediaElementSource(v);
        const dest = ac.createMediaStreamDestination();
        src.connect(ac.destination); src.connect(dest);
        v._dest = dest;
      } catch {}
      return v._dest;
    }

    async savePNG(suffix = 'efeito') {
      if (!this.media) return OS.dialog('Nada carregado', 'Carregue uma foto ou vídeo primeiro.', '⚠️');
      this.frame(true);
      OS.download(await OS.canvasBlob(this.canvas), `${this.name}-${suffix}.png`);
    }

    /** Liga/desliga a gravação. Vídeo grava do começo ao fim; imagem grava `seconds`. */
    async toggleRecord(btn, seconds = 5, suffix = 'efeito') {
      if (!this.media) return OS.dialog('Nada carregado', 'Carregue uma foto ou vídeo primeiro.', '⚠️');
      if (!window.MediaRecorder) return OS.dialog('Sem suporte', 'Seu navegador não grava vídeo. Tente o Chrome ou Edge.', '❌');
      if (this.rec) return this.finishRecord();
      const v = this.media.video ? this.media.el : null;
      let audio = null;
      if (v) {
        const d = this.ensureAudio();
        if (d && this.sound) audio = d.stream;
        v.loop = false; v.currentTime = 0; v.muted = !this.sound;
        await v.play().catch(() => {});
        this.paused = false;
        v.onended = () => this.finishRecord();
      }
      this.recBtn = btn; this.recLabel = btn.textContent; this.recSuffix = suffix;
      btn.textContent = '⏹ Parar gravação';
      this.rec = OS.recordCanvas(this.canvas, { fps: 30, audio });
      if (!v) this.recTimer = setTimeout(() => this.finishRecord(), seconds * 1000);
    }
    async finishRecord() {
      if (!this.rec) return;
      const r = this.rec; this.rec = null;
      clearTimeout(this.recTimer);
      if (this.media?.video) { this.media.el.loop = true; this.media.el.onended = null; this.media.el.play().catch(() => {}); }
      this.recBtn.textContent = this.recLabel;
      const { blob, ext } = await r.stop();
      OS.download(blob, `${this.name}-${this.recSuffix}.${ext}`);
    }
  }

  MediaTool.demoCanvas = demoCanvas;
  window.MediaTool = MediaTool;
})();
