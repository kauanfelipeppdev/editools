/* GLFX — roda um fragment shader em tela cheia sobre uma imagem/vídeo/canvas.
   uniforms automáticos: u_tex (fonte), u_res (tamanho de saída), u_src (tamanho da fonte), u_time (s). */
(function () {
  const VERT = `attribute vec2 p; varying vec2 v_uv;
    void main(){ v_uv = vec2(p.x*.5+.5, .5-p.y*.5); gl_Position = vec4(p,0.,1.); }`;

  const COMMON = `precision highp float;
    varying vec2 v_uv; uniform sampler2D u_tex; uniform vec2 u_res; uniform vec2 u_src; uniform float u_time;
    float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
    float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
      return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
    float fbm(vec2 p){ float v=0., a=.5; for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.03; a*=.5; } return v; }
    vec3 lum3(vec3 c){ return vec3(dot(c, vec3(.299,.587,.114))); }
    vec3 rgb2yiq(vec3 c){ return mat3(.299,.596,.211, .587,-.274,-.523, .114,-.322,.312)*c; }
    vec3 yiq2rgb(vec3 c){ return mat3(1.,1.,1., .956,-.272,-1.106, .621,-.647,1.703)*c; }
  `;

  function create(canvas, frag) {
    const gl = canvas.getContext('webgl', { preserveDrawingBuffer: true, premultipliedAlpha: false, alpha: true });
    if (!gl) throw new Error('WebGL indisponível');
    const sh = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) + '\n' + src);
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, COMMON + frag));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const texs = {}; // nome -> { tex, unit, el }
    let units = 0;
    const ulocs = {};
    const U = (n) => (n in ulocs ? ulocs[n] : (ulocs[n] = gl.getUniformLocation(prog, n)));

    function texture(name, el) {
      let t = texs[name];
      if (!t) {
        t = texs[name] = { tex: gl.createTexture(), unit: units++ };
        gl.activeTexture(gl.TEXTURE0 + t.unit);
        gl.bindTexture(gl.TEXTURE_2D, t.tex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      }
      t.el = el; t.dirty = true;
      return t;
    }
    function nearest(name, on) {
      const t = texs[name]; if (!t) return;
      gl.activeTexture(gl.TEXTURE0 + t.unit);
      gl.bindTexture(gl.TEXTURE_2D, t.tex);
      const f = on ? gl.NEAREST : gl.LINEAR;
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, f);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, f);
    }

    const t0 = performance.now();
    function render(uniforms = {}) {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(prog);
      for (const [name, t] of Object.entries(texs)) {
        gl.activeTexture(gl.TEXTURE0 + t.unit);
        gl.bindTexture(gl.TEXTURE_2D, t.tex);
        const live = t.el && (t.el.tagName === 'VIDEO' || t.el.tagName === 'CANVAS');
        if (t.el && (t.dirty || live)) {
          gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
          try { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, t.el); } catch {}
          t.dirty = false;
        }
        gl.uniform1i(U(name), t.unit);
      }
      const src = texs.u_tex?.el;
      const sw = src ? src.videoWidth || src.naturalWidth || src.width : 1;
      const shh = src ? src.videoHeight || src.naturalHeight || src.height : 1;
      gl.uniform2f(U('u_res'), canvas.width, canvas.height);
      gl.uniform2f(U('u_src'), sw, shh);
      gl.uniform1f(U('u_time'), uniforms.u_time ?? (performance.now() - t0) / 1000);
      for (const [k, v] of Object.entries(uniforms)) {
        if (k === 'u_time') continue;
        const l = U(k); if (!l) continue;
        if (typeof v === 'number' || typeof v === 'boolean') gl.uniform1f(l, +v);
        else if (v.length === 2) gl.uniform2fv(l, v);
        else if (v.length === 3) gl.uniform3fv(l, v);
        else if (v.length === 4) gl.uniform4fv(l, v);
        else if (v.length > 4) gl.uniform3fv(l, v); // arrays vec3 (ex.: paletas)
      }
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    return { gl, canvas, texture, nearest, render, setSource: (el) => texture('u_tex', el) };
  }

  const hex2rgb = (h) => { const n = parseInt(h.replace('#', ''), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; };

  window.GLFX = { create, hex2rgb };
})();
