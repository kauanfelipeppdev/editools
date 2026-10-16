/* MP3 — decodifica áudio/vídeo e codifica MP3 com lamejs (precisa de lame.min.js carregado antes). */
(function () {
  async function decodeFile(file) {
    const buf = await file.arrayBuffer();
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    try { return await ac.decodeAudioData(buf); }
    catch { throw new Error('Não consegui ler o áudio desse arquivo. Tente MP3, WAV, M4A, MP4 ou WEBM.'); }
    finally { ac.close(); }
  }

  /** AudioBuffer → Blob MP3. Roda em pedaços pra não travar a página. */
  async function encode(buffer, kbps = 192, onProgress) {
    const ch = Math.min(2, buffer.numberOfChannels);
    const enc = new lamejs.Mp3Encoder(ch, buffer.sampleRate, kbps);
    const toI16 = (f) => { const o = new Int16Array(f.length); for (let i = 0; i < f.length; i++) { const s = Math.max(-1, Math.min(1, f[i])); o[i] = s < 0 ? s * 0x8000 : s * 0x7fff; } return o; };
    const L = toI16(buffer.getChannelData(0));
    const R = ch > 1 ? toI16(buffer.getChannelData(1)) : null;
    const out = [];
    const block = 1152, step = block * 200;
    for (let i = 0; i < L.length; i += step) {
      for (let j = i; j < Math.min(i + step, L.length); j += block) {
        const l = L.subarray(j, j + block);
        const d = R ? enc.encodeBuffer(l, R.subarray(j, j + block)) : enc.encodeBuffer(l);
        if (d.length) out.push(new Uint8Array(d));
      }
      onProgress && onProgress(Math.min(1, (i + step) / L.length));
      await new Promise((r) => setTimeout(r, 0));
    }
    const end = enc.flush();
    if (end.length) out.push(new Uint8Array(end));
    return new Blob(out, { type: 'audio/mpeg' });
  }

  window.MP3 = { decodeFile, encode };
})();
