/* ENCODE — exporta animações quadro a quadro.
   ENCODE.video({ canvas, draw(t, i), fps, seconds, format: 'mp4'|'png', name, onProgress })
   MP4 usa WebCodecs + mp4-muxer (rápido e com tempo exato); sem WebCodecs, grava em tempo real. */
(function () {
  const even = (n) => n - (n % 2);
  let Mp4;

  async function pickAvc(w, h, fps) {
    for (const codec of ['avc1.640033', 'avc1.640028', 'avc1.4d0028', 'avc1.42001f']) {
      const c = { codec, width: w, height: h, bitrate: Math.min(40e6, w * h * fps * .15), framerate: fps };
      try { if ((await VideoEncoder.isConfigSupported(c)).supported) return c; } catch {}
    }
    return null;
  }

  async function video({ canvas, draw, fps = 30, seconds = 5, format = 'mp4', name = 'video', onProgress = () => {} }) {
    const n = Math.round(seconds * fps);
    if (format === 'png') {
      const zip = new JSZip();
      for (let i = 0; i < n; i++) {
        draw(i / fps, i, n);
        zip.file(`${name}_${String(i).padStart(5, '0')}.png`, await OS.canvasBlob(canvas));
        onProgress(i / n);
      }
      return OS.download(await zip.generateAsync({ type: 'blob' }), name + '-png.zip');
    }
    const W = even(canvas.width), H = even(canvas.height);
    const config = window.VideoEncoder ? await pickAvc(W, H, fps) : null;
    if (!config) {
      const rec = OS.recordCanvas(canvas, { fps });
      const t0 = performance.now();
      await new Promise((r) => {
        const step = () => { const t = (performance.now() - t0) / 1000; draw(Math.min(t, seconds), Math.floor(t * fps), n); onProgress(t / seconds); t < seconds ? requestAnimationFrame(step) : r(); };
        step();
      });
      const { blob, ext } = await rec.stop();
      return OS.download(blob, name + '.' + ext);
    }
    Mp4 = Mp4 || (await import('https://cdn.jsdelivr.net/npm/mp4-muxer@5.1.3/build/mp4-muxer.mjs'));
    const target = new Mp4.ArrayBufferTarget();
    const muxer = new Mp4.Muxer({ target, video: { codec: 'avc', width: W, height: H }, fastStart: 'in-memory' });
    let err = null;
    const enc = new VideoEncoder({ output: (c, m) => muxer.addVideoChunk(c, m), error: (e) => (err = e) });
    enc.configure(config);
    const src = W === canvas.width && H === canvas.height ? canvas : Object.assign(document.createElement('canvas'), { width: W, height: H });
    for (let i = 0; i < n; i++) {
      if (err) throw err;
      draw(i / fps, i, n);
      if (src !== canvas) src.getContext('2d').drawImage(canvas, 0, 0);
      const f = new VideoFrame(src, { timestamp: Math.round(i * 1e6 / fps), duration: Math.round(1e6 / fps), alpha: 'discard' });
      enc.encode(f, { keyFrame: i % (fps * 2) === 0 });
      f.close();
      if (enc.encodeQueueSize > 6) await new Promise((r) => setTimeout(r, 4));
      onProgress(i / n);
    }
    await enc.flush();
    if (err) throw err;
    muxer.finalize();
    OS.download(new Blob([target.buffer], { type: 'video/mp4' }), name + '.mp4');
  }

  window.ENCODE = { video };
})();
