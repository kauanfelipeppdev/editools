/* EdiTools OS — base compartilhada: temas, janelas arrastáveis, barra de tarefas e utilitários. */
(function () {
  const THEMES = {
    '98': { name: 'Windows 98', css: 'https://unpkg.com/98.css@0.1.21/dist/98.css' },
    xp: { name: 'Windows XP', css: 'https://unpkg.com/xp.css@0.2.6/dist/XP.css' },
    '7': { name: 'Windows 7 (Aero)', css: 'https://unpkg.com/7.css@0.16.0/dist/7.css' },
    mac: { name: 'macOS', css: 'assets/macos.css' },
    win11: { name: 'Windows 11', css: 'assets/win11.css' },
    linux: { name: 'Linux', css: 'assets/linux.css' },
  };

  // accept: tipos de arquivo que a ferramenta abre (usado no "Enviar para…" e ao soltar no ícone)
  const IMG = '^image/', MEDIA = '^(image|video)/', AV = '^(audio|video)/';
  const TOOLS = [
    { file: 'removedor.html', icon: '✂️', name: 'removedor_de_fundo.exe', desc: 'tira o fundo de imagens com IA, direto no navegador', accept: IMG },
    { file: 'legenda.html', icon: '💬', name: 'legenda_automatica.exe', desc: 'legendas automáticas com IA, estilo TikTok', accept: AV, isNew: true },
    { file: 'botoes.html', icon: '🔘', name: 'criador_de_botoes.exe', desc: 'monte um botão do seu jeito e baixe em PNG' },
    { file: 'chat.html', icon: '📱', name: 'conversa_animada.exe', desc: 'vídeo de conversa de chat, mensagem por mensagem', isNew: true },
    { file: 'scroll.html', icon: '🖱️', name: 'gravador_de_scroll.exe', desc: 'vídeo de uma página inteira sendo rolada', accept: IMG, isNew: true },
    { file: 'baixador.html', icon: '⬇️', name: 'baixador_de_video.exe', desc: 'baixa vídeo ou só o áudio a partir de um link', isNew: true },
    { file: 'terminal.html', icon: '⌨️', name: 'terminal.exe', desc: 'janela de terminal bonita em PNG, SVG ou vídeo', isNew: true },
    { file: 'thumbnail.html', icon: '🖼️', name: 'thumbnail.exe', desc: 'monte thumbnails e veja como ficam no feed', accept: IMG, isNew: true },
    { file: 'mockup.html', icon: '💻', name: 'mockups.exe', desc: 'prints e vídeos dentro de celular, notebook e navegador', accept: MEDIA, isNew: true },
    { file: 'audiograma.html', icon: '🎧', name: 'audiograma.exe', desc: 'áudio vira vídeo com onda sonora animada', accept: AV, isNew: true },
    { file: 'textoanim.html', icon: '🔤', name: 'animacao_de_texto.exe', desc: 'máquina de escrever, glitch, onda, quique e mais', isNew: true },
    { file: 'teia.html', icon: '🕸️', name: 'criador_de_teia.exe', desc: 'mapa mental, teia, cadeia e quadro de investigação', isNew: true },
    { file: 'grafico.html', icon: '📊', name: 'grafico_animado.exe', desc: 'colunas, linha, pizza e corrida de barras animadas', isNew: true },
    { file: 'termometro.html', icon: '🌡️', name: 'termometro.exe', desc: 'termômetro, meta de live e medidor animados', isNew: true },
    { file: 'progresso.html', icon: '⏳', name: 'barra_de_progresso.exe', desc: 'barras de carregamento animadas', isNew: true },
    { file: 'inscreva.html', icon: '🔔', name: 'botao_inscreva_se.exe', desc: 'botão de inscreva-se animado com cursor', accept: IMG, isNew: true },
    { file: 'cronometro.html', icon: '⏱️', name: 'cronometro.exe', desc: 'contagem regressiva e cronômetro em overlay', isNew: true },
    { file: 'letras.html', icon: '✉️', name: 'gerador_de_letras.exe', desc: 'escreva com letras recortadas de revista' },
    { file: 'dvdficar.html', icon: '📀', name: 'dvdficar.exe', desc: 'sua logo quicando na tela de descanso do DVD', accept: IMG },
    { file: 'vhs.html', icon: '📼', name: 'modulador_vhs.exe', desc: 'efeito de fita VHS em foto e vídeo', accept: MEDIA },
    { file: 'texto3d.html', icon: '🧊', name: 'texto_3d.exe', desc: 'textos em 3D com vários materiais' },
    { file: 'peixe.html', icon: '🐟', name: 'olho_de_peixe.exe', desc: 'lente olho de peixe anos 90/2000', accept: MEDIA },
    { file: 'camera.html', icon: '📷', name: 'camera_digital.exe', desc: 'simula 8 câmeras digitais antigas', accept: MEDIA },
    { file: 'audio.html', icon: '🎙️', name: 'audio_analogico.exe', desc: 'deixa seu áudio com cara de rádio, fita e VHS', accept: AV },
    { file: 'pixelador.html', icon: '👾', name: 'pixelador.exe', desc: 'transforma imagens e vídeos em pixel art', accept: MEDIA },
    { file: 'popup.html', icon: '🪟', name: 'criador_de_popup.exe', desc: 'pop-ups estilo Windows antigo em PNG' },
    { file: 'petpet.html', icon: '🫳', name: 'petpet.exe', desc: 'GIF de uma mãozinha fazendo carinho na sua imagem', accept: IMG },
    { file: 'contador.html', icon: '🔢', name: 'contador_de_numeros.exe', desc: 'vídeo de número subindo, com fundo transparente' },
    { file: 'gradiente.html', icon: '🌈', name: 'gradientes_animados.exe', desc: 'gradientes que se mexem, exporta em vídeo' },
    { file: 'texturas.html', icon: '📜', name: 'texturas_de_papel.exe', desc: 'texturas de papel animadas em stop motion' },
    { file: 'tv.html', icon: '📺', name: 'tv_de_tubo.exe', desc: 'sua mídia passando numa TV de tubo', accept: MEDIA },
    { file: 'scripts.html', icon: '⚙️', name: 'scripts.exe', desc: 'scripts para After Effects' },
    { file: 'arquivos.html', icon: '📂', name: 'meus_arquivos.exe', desc: 'tudo que você exportou fica guardado aqui', isNew: true },
    { file: 'links.html', icon: '🔗', name: 'links.exe', desc: 'links, conversor MP4 → MP3 e mais' },
  ];

  // Atalhos pros programas da Adobe (abrem o site oficial)
  const ADOBE = [
    { id: 'Ps', name: 'Photoshop', bg: '#001E36', fg: '#31A8FF', url: 'https://www.adobe.com/br/products/photoshop.html' },
    { id: 'Ae', name: 'After Effects', bg: '#00005B', fg: '#9999FF', url: 'https://www.adobe.com/br/products/aftereffects.html' },
    { id: 'Pr', name: 'Premiere Pro', bg: '#00005B', fg: '#9999FF', url: 'https://www.adobe.com/br/products/premiere.html' },
    { id: 'Ai', name: 'Illustrator', bg: '#330000', fg: '#FF9A00', url: 'https://www.adobe.com/br/products/illustrator.html' },
  ];
  const adobeIcon = (a, s = 34) => `<svg class="adobe-ico" width="${s}" height="${s}" viewBox="0 0 240 234" aria-hidden="true"><rect width="240" height="234" rx="42.5" fill="${a.bg}"/><text x="120" y="160" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="118" fill="${a.fg}" letter-spacing="-4">${a.id}</text></svg>`;

  const store = {
    get(k, d) { try { const v = localStorage.getItem('imapng:' + k); return v == null ? d : v; } catch { return d; } },
    set(k, v) { try { localStorage.setItem('imapng:' + k, v); } catch {} },
  };
  const here = () => (location.pathname.split('/').pop() || 'index.html');

  // ---------- Idioma ----------
  // Em inglês, o dicionário (i18n.js) entra antes de a página montar, pra não piscar em português.
  const LANG = store.get('lang', (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en');
  document.documentElement.lang = LANG === 'en' ? 'en' : 'pt-BR';
  if (LANG === 'en') document.write('<script src="assets/i18n.js"><\/script>');
  const T = (s) => (LANG === 'en' && window.I18N ? window.I18N.t(s) : s);
  function setLang(l) { store.set('lang', l); location.reload(); }

  // ---------- Banco local (IndexedDB): arquivos exportados, caixa de entrada e papel de parede ----------
  let dbp;
  function db() {
    return (dbp = dbp || new Promise((res, rej) => {
      const r = indexedDB.open('imapng', 1);
      r.onupgradeneeded = () => { r.result.createObjectStore('files', { keyPath: 'id', autoIncrement: true }); r.result.createObjectStore('kv'); };
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    }));
  }
  async function idb(storeName, mode, fn) {
    const d = await db();
    return new Promise((res, rej) => {
      const t = d.transaction(storeName, mode);
      const req = fn(t.objectStore(storeName));
      t.oncomplete = () => res(req && 'result' in req ? req.result : undefined);
      t.onerror = () => rej(t.error);
    });
  }
  const kv = {
    get: (k) => idb('kv', 'readonly', (s) => s.get(k)).catch(() => undefined),
    set: (k, v) => idb('kv', 'readwrite', (s) => s.put(v, k)).catch(() => {}),
    del: (k) => idb('kv', 'readwrite', (s) => s.delete(k)).catch(() => {}),
  };
  const MAX_FILES = 40, MAX_BYTES = 600e6;
  const files = {
    async add(blob, name) {
      if (blob.size > 250e6) return;
      await idb('files', 'readwrite', (s) => s.add({ blob, name, type: blob.type, size: blob.size, from: here(), at: Date.now() }));
      const all = await files.list();
      let bytes = 0;
      const drop = all.filter((f, i) => (bytes += f.size) > MAX_BYTES || i >= MAX_FILES);
      for (const f of drop) await files.del(f.id);
    },
    list: () => idb('files', 'readonly', (s) => s.getAll()).then((l) => l.reverse()).catch(() => []),
    get: (id) => idb('files', 'readonly', (s) => s.get(id)),
    del: (id) => idb('files', 'readwrite', (s) => s.delete(id)),
    clear: () => idb('files', 'readwrite', (s) => s.clear()),
  };

  // temas modernos: mesma base de componentes e podem ficar escuros
  const MODERN = ['mac', 'win11', 'linux'];
  const isDark = () => store.get('dark', 'off') === 'on';
  const applyDark = () => document.documentElement.toggleAttribute('data-dark', isDark() && MODERN.includes(document.documentElement.dataset.theme));
  function setDark(on) { store.set('dark', on ? 'on' : 'off'); applyDark(); document.dispatchEvent(new CustomEvent('themechange', { detail: document.documentElement.dataset.theme })); }
  function setTheme(t) {
    if (!THEMES[t]) t = 'xp';
    document.documentElement.dataset.theme = t;
    document.documentElement.classList.toggle('modern', MODERN.includes(t));
    applyDark();
    const link = document.getElementById('theme-css');
    if (link && link.getAttribute('href') !== THEMES[t].css) link.setAttribute('href', THEMES[t].css);
    store.set('theme', t);
    document.dispatchEvent(new CustomEvent('themechange', { detail: t }));
  }
  setTheme(store.get('theme', 'xp'));

  // ---------- Papel de parede ----------
  const WALLS = {
    theme: { name: 'Padrão do tema' },
    teal: { name: 'Verde-água clássico', color: '#008080', img: 'none' },
    nuvens: { name: 'Nuvens', color: '#5b9be8', img: 'radial-gradient(40% 18% at 20% 30%, #fff 0 40%, transparent 72%), radial-gradient(30% 14% at 72% 22%, #fff 0 35%, transparent 70%), radial-gradient(45% 16% at 60% 70%, rgba(255,255,255,.9) 0 30%, transparent 72%), linear-gradient(#3d7fd9, #9cc8f6)' },
    vapor: { name: 'Pôr do sol vaporwave', color: '#2b1055', img: 'radial-gradient(circle at 50% 62%, #ffe46b 0 12%, #ff6fb5 12.2% 13%, transparent 13.2%), repeating-linear-gradient(transparent 0 38px, rgba(255,79,216,.6) 38px 40px), linear-gradient(#2b1055 0%, #d6338a 55%, #2b1055 55.2%, #12052a 100%)' },
    aurora: { name: 'Aurora', color: '#061a2b', img: 'radial-gradient(60% 40% at 30% 30%, rgba(60,255,180,.45), transparent 70%), radial-gradient(50% 35% at 75% 45%, rgba(140,90,255,.45), transparent 70%), linear-gradient(#020b16, #0b2942)' },
    noite: { name: 'Noite estrelada', color: '#0b1030', img: 'radial-gradient(1.5px 1.5px at 20px 30px, #fff, transparent), radial-gradient(1px 1px at 90px 70px, #fff, transparent), radial-gradient(1.5px 1.5px at 160px 120px, #cde, transparent), radial-gradient(1px 1px at 50px 160px, #fff, transparent), linear-gradient(#050818, #1a2058)', size: '200px 200px, 200px 200px, 200px 200px, 200px 200px, cover' },
    xadrez: { name: 'Xadrez', color: '#c0c0c0', img: 'conic-gradient(#d8d8d8 25%, #a8a8a8 0 50%, #d8d8d8 0 75%, #a8a8a8 0)', size: '48px 48px' },
    grama: { name: 'Gramado', color: '#3f8a24', img: 'linear-gradient(#7ec8ff 0 45%, #4f9b2f 45.2%, #2f6d19)' },
    preto: { name: 'Preto', color: '#000', img: 'none' },
  };
  let wallUrl;
  async function applyWall() {
    const w = store.get('wall', 'theme'), s = document.documentElement.style;
    ['--desk', '--desk-img', '--desk-size'].forEach((p) => s.removeProperty(p));
    if (wallUrl) { URL.revokeObjectURL(wallUrl); wallUrl = null; }
    if (w === 'image') {
      const blob = await kv.get('wallimg');
      if (!blob) return;
      wallUrl = URL.createObjectURL(blob);
      s.setProperty('--desk-img', `url("${wallUrl}")`);
      s.setProperty('--desk-size', store.get('wallfit', 'cover'));
    } else if (w.startsWith('#')) {
      s.setProperty('--desk', w); s.setProperty('--desk-img', 'none');
    } else if (WALLS[w] && WALLS[w].img) {
      s.setProperty('--desk', WALLS[w].color); s.setProperty('--desk-img', WALLS[w].img);
      if (WALLS[w].size) s.setProperty('--desk-size', WALLS[w].size);
    }
  }
  applyWall();

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

  // ---------- Favoritos (ficam na barra de tarefas, no Dock e no topo do menu) ----------
  const favs = {
    list() { try { const l = JSON.parse(store.get('favs', '[]')); return l.filter((f) => TOOLS.some((t) => t.file === f)); } catch { return []; } },
    has: (f) => favs.list().includes(f),
    toggle(f) {
      const l = favs.list();
      store.set('favs', JSON.stringify(l.includes(f) ? l.filter((x) => x !== f) : [...l, f]));
      document.dispatchEvent(new CustomEvent('favchange'));
    },
  };
  const norm = (s) => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  /** Ferramentas que combinam com a busca (nome, descrição ou nome traduzido). */
  const searchTools = (q) => { const n = norm(q).trim(); return !n ? TOOLS : TOOLS.filter((t) => norm(`${t.name} ${t.desc} ${T(t.name)} ${T(t.desc)} ${t.file}`).includes(n)); };

  function buildTaskbar() {
    const bar = document.createElement('nav');
    bar.className = 'taskbar';
    const item = (t) => `<a href="${t.file}" class="sm-item sm-tool" role="menuitem" data-file="${t.file}"><span>${t.icon}</span><i>${t.name}</i><span class="sm-star" data-star="${t.file}" title="Favoritar" aria-label="Favoritar"></span></a>`;
    bar.innerHTML = `
      <button class="start" aria-haspopup="menu" aria-expanded="false"><span class="orb"></span><b>Iniciar</b></button>
      <div class="quick"></div>
      <div class="tasks"></div>
      <div class="tray"><button class="tray-lang" title="Idioma / Language">${LANG === 'en' ? 'EN' : 'PT'}</button><span class="tray-files" title="Meus arquivos">📂</span><span class="tray-dark" title="Modo escuro">🌙</span><span class="tray-theme" title="Trocar tema">🎨</span><time></time></div>
      <div class="startmenu" role="menu" hidden>
        <div class="sm-head"><span class="sm-avatar">🖼️</span><b>EdiTools</b></div>
        <div class="sm-find"><input type="search" class="sm-search" placeholder="Buscar ferramenta…" aria-label="Buscar ferramenta" autocomplete="off"></div>
        <div class="sm-body">
          <a href="index.html" class="sm-item" role="menuitem"><span>🏠</span>Área de trabalho</a>
          <div class="sm-favs"></div>
          <div class="sm-sep"></div>
          <div class="sm-tools">${TOOLS.map(item).join('')}</div>
          <div class="sm-empty sm-label" hidden>Nenhuma ferramenta encontrada.</div>
          <div class="sm-rest">
          <div class="sm-sep"></div>
          <div class="sm-label">Programas Adobe</div>
          ${ADOBE.map((a) => `<a href="${a.url}" target="_blank" rel="noopener" class="sm-item" role="menuitem"><span>${adobeIcon(a, 18)}</span>${a.name}</a>`).join('')}
          <div class="sm-sep"></div>
          <div class="sm-label">Tema</div>
          ${Object.entries(THEMES).map(([k, v]) => `<button class="sm-item" data-theme-pick="${k}" role="menuitem"><span>🎨</span>${v.name}</button>`).join('')}
          <button class="sm-item" data-sm="dark" role="menuitem"><span>🌙</span>Modo escuro</button>
          <div class="sm-sep"></div>
          <button class="sm-item" data-sm="settings" role="menuitem"><span>🖥️</span>Papel de parede e proteção de tela</button>
          <button class="sm-item" data-sm="keys" role="menuitem"><span>⌨️</span>Atalhos de teclado</button>
          <button class="sm-item" data-sm="helper" role="menuitem"><span>💾</span>Chamar o Disquinho</button>
          <button class="sm-item" data-sm="lang" role="menuitem"><span>🌐</span>${LANG === 'en' ? 'Português' : 'English'}</button>
          <button class="sm-item" data-sm="install" role="menuitem" hidden><span>📲</span>Instalar como aplicativo</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(bar);
    // Dock (temas macOS e Linux): favoritos primeiro, depois o resto, com a ferramenta atual marcada
    const dock = document.createElement('nav');
    dock.className = 'dock';
    dock.setAttribute('aria-label', 'Dock');
    document.body.appendChild(dock);
    const quick = bar.querySelector('.quick'), favBox = bar.querySelector('.sm-favs');
    const dockLink = (t) => `<a href="${t.file}" title="${T(t.name)}"${t.file === here() ? ' class="on"' : ''}>${t.icon}</a>`;
    const renderFavs = () => {
      const fl = favs.list().map((f) => TOOLS.find((t) => t.file === f));
      quick.innerHTML = fl.map((t) => `<a href="${t.file}" title="${T(t.name)}">${t.icon}</a>`).join('');
      favBox.innerHTML = fl.length ? `<div class="sm-sep"></div><div class="sm-label">${T('Favoritos')}</div>` + fl.map(item).join('') : '';
      dock.innerHTML = `<a href="index.html" title="${T('Área de trabalho')}"${here() === 'index.html' ? ' class="on"' : ''}>🏠</a>`
        + (fl.length ? '<span class="dock-sep"></span>' + fl.map(dockLink).join('') : '')
        + '<span class="dock-sep"></span>' + TOOLS.filter((t) => !fl.includes(t)).map(dockLink).join('');
      bar.querySelectorAll('[data-star]').forEach((b) => { const on = favs.has(b.dataset.star); b.textContent = on ? '★' : '☆'; b.classList.toggle('on', on); b.title = T(on ? 'Tirar dos favoritos' : 'Favoritar'); });
    };
    renderFavs();
    document.addEventListener('favchange', renderFavs);
    taskList = bar.querySelector('.tasks');
    const start = bar.querySelector('.start'), menu = bar.querySelector('.startmenu'), find = bar.querySelector('.sm-search');
    const filter = () => {
      const q = find.value, hits = new Set(searchTools(q).map((t) => t.file));
      bar.querySelectorAll('.sm-tools .sm-tool').forEach((a) => (a.hidden = !hits.has(a.dataset.file)));
      const searching = !!q.trim();
      bar.querySelector('.sm-rest').hidden = searching; favBox.hidden = searching;
      bar.querySelector('.sm-empty').hidden = !searching || hits.size > 0;
    };
    const toggle = (open) => {
      menu.hidden = !open; start.setAttribute('aria-expanded', open); start.classList.toggle('on', open);
      if (open) { find.value = ''; filter(); if (isDesktop()) setTimeout(() => find.focus(), 0); }
    };
    openMenu = () => toggle(true);
    find.addEventListener('input', filter);
    find.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { const a = bar.querySelector('.sm-tools .sm-tool:not([hidden])'); if (a) location.href = a.getAttribute('href'); }
      if (e.key === 'ArrowDown') { e.preventDefault(); bar.querySelector('.sm-body a:not([hidden]), .sm-body button:not([hidden])')?.focus(); }
    });
    // ★ dentro do item do menu favorita sem abrir a ferramenta
    menu.addEventListener('click', (e) => { const s = e.target.closest('[data-star]'); if (!s) return; e.preventDefault(); e.stopPropagation(); favs.toggle(s.dataset.star); });
    start.onclick = (e) => { e.stopPropagation(); toggle(menu.hidden); };
    document.addEventListener('click', (e) => { if (!e.target.closest('.startmenu')) toggle(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });
    bar.querySelectorAll('[data-theme-pick]').forEach((b) => (b.onclick = () => { setTheme(b.dataset.themePick); toggle(false); }));
    const sm = (k) => bar.querySelector(`[data-sm=${k}]`);
    sm('settings').onclick = () => { toggle(false); openSettings(); };
    sm('keys').onclick = () => { toggle(false); showKeys(); };
    sm('dark').onclick = () => { setDark(!isDark()); toggle(false); };
    sm('helper').onclick = () => { toggle(false); store.set('helper', 'on'); helper.show(true); };
    sm('lang').onclick = () => setLang(LANG === 'en' ? 'pt' : 'en');
    sm('install').onclick = () => { toggle(false); installPrompt && installPrompt.prompt(); };
    if (installPrompt) sm('install').hidden = false;
    window.addEventListener('beforeinstallprompt', () => (sm('install').hidden = false));
    bar.querySelector('.tray-lang').onclick = () => setLang(LANG === 'en' ? 'pt' : 'en');
    bar.querySelector('.tray-files').onclick = () => (location.href = 'arquivos.html');
    bar.querySelector('.tray-dark').onclick = () => setDark(!isDark());
    const order = Object.keys(THEMES);
    bar.querySelector('.tray-theme').onclick = () => setTheme(order[(order.indexOf(document.documentElement.dataset.theme) + 1) % order.length]);
    const syncDark = () => { const m = MODERN.includes(document.documentElement.dataset.theme); sm('dark').hidden = !m; bar.querySelector('.tray-dark').hidden = !m; bar.querySelector('.tray-dark').textContent = isDark() ? '☀️' : '🌙'; };
    syncDark();
    document.addEventListener('themechange', syncDark);
    const clock = bar.querySelector('time');
    const tick = () => (clock.textContent = new Date().toLocaleTimeString(LANG === 'en' ? 'en-US' : 'pt-BR', { hour: '2-digit', minute: '2-digit' }));
    tick(); setInterval(tick, 10000);
    renderTasks();
  }
  let openMenu = () => {};

  // ---------- Atalhos de teclado ----------
  const KEYS = [
    ['Ctrl + K', 'Buscar ferramenta'], ['Espaço', 'Repetir a prévia'], ['Ctrl + Enter', 'Exportar / gerar'],
    ['Ctrl + S', 'Salvar projeto'], ['Ctrl + O', 'Abrir projetos salvos'], ['F1', 'Ajuda da ferramenta'], ['Esc', 'Fechar menu ou janela'],
  ];
  function showKeys() {
    let w = document.getElementById('os-keys');
    if (!w) {
      w = document.createElement('section');
      w.className = 'window os-keys';
      w.id = 'os-keys';
      w.dataset.title = 'Atalhos de teclado';
      w.dataset.icon = '⌨️';
      w.innerHTML = `<div class="window-body"><table class="keys">${KEYS.map(([k, d]) => `<tr><td><kbd>${k.split(' + ').join('</kbd> + <kbd>')}</kbd></td><td>${d}</td></tr>`).join('')}</table>
        <div class="btns end" style="margin-top:8px"><button data-x>OK</button></div></div>`;
      document.body.appendChild(w);
      buildWindow(w);
      if (LANG === 'en' && window.I18N) window.I18N.apply(w);
      w.querySelector('[data-x]').onclick = () => { w.classList.add('closed'); renderTasks(); };
    }
    openWin('os-keys');
  }
  const typing = (el) => el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) && !/^(checkbox|radio|range|button|color)$/.test(el.type || '');
  const visible = (el) => el && !el.disabled && el.offsetParent !== null;
  document.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase(), mod = e.ctrlKey || e.metaKey;
    if (mod && k === 'k') { e.preventDefault(); openMenu(); return; }
    if (mod && k === 's' && projectsOn()) { e.preventDefault(); saveProject(); return; }
    if (mod && k === 'o' && projectsOn()) { e.preventDefault(); openProjects(); return; }
    if (mod && k === 'enter') {
      const b = [...document.querySelectorAll('.window.app [data-x=go], .window.app #go, .window.app button.default, .window.app #genBtn, .window.app #exportBtn')].find(visible);
      if (b) { e.preventDefault(); b.click(); }
      return;
    }
    if (e.key === 'F1') { const h = document.getElementById('help'); if (h) { e.preventDefault(); openWin('help'); } return; }
    if (e.key === 'Escape') {
      const top = [...document.querySelectorAll('.veil .window, .window.help:not(.closed), .window.os-keys:not(.closed), .window.os-settings:not(.closed), .window.os-proj:not(.closed)')].pop();
      if (top) top.querySelector('[aria-label=Close]')?.click();
      return;
    }
    if (e.key === ' ' && !mod && !typing(document.activeElement) && document.activeElement?.tagName !== 'BUTTON') {
      const b = document.getElementById('playBtn');
      if (visible(b)) { e.preventDefault(); b.click(); }
    }
  });

  // ---------- Projetos salvos: guarda os campos da ferramenta pra abrir depois ----------
  const projectsOn = () => !!document.querySelector('.window.app .panel') && !['index.html', 'arquivos.html', 'links.html', 'scripts.html', 'baixador.html'].includes(here());
  const fields = () => [...document.querySelectorAll('.window.app [id]')].filter((el) => /^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName) && !/^(file|button|submit|password)$/.test(el.type) && !el.closest('#exp, .no-save'));
  function snapshot() {
    const v = {};
    for (const el of fields()) v[el.id] = el.type === 'checkbox' || el.type === 'radio' ? el.checked : el.value;
    return v;
  }
  function restore(v) {
    for (const el of fields()) {
      if (!(el.id in v)) continue;
      if (el.type === 'checkbox' || el.type === 'radio') el.checked = !!v[el.id]; else el.value = v[el.id];
      // botões de estilo que guardam a escolha num campo escondido
      if (el.type === 'hidden') { const b = document.querySelector(`.window.app [data-fx="${CSS.escape(v[el.id])}"], .window.app [data-d="${CSS.escape(v[el.id])}"]`); if (b) b.click(); }
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
  const projKey = () => 'proj:' + here();
  const projList = async () => (await kv.get(projKey())) || [];
  /** Janelinha com um campo de texto (sem o prompt do navegador). */
  function ask(title, label, value) {
    return new Promise((res) => {
      const veil = document.createElement('div');
      veil.className = 'veil';
      veil.innerHTML = `<div class="window dialog" data-title=""><div class="window-body"><label class="field"><span></span><input type="text" maxlength="60"></label><div class="btns end" style="margin-top:10px"><button class="default" data-y>OK</button><button data-n>Cancelar</button></div></div></div>`;
      const d = veil.firstElementChild;
      d.dataset.title = T(title);
      d.querySelector('span').textContent = T(label);
      const inp = d.querySelector('input'); inp.value = value;
      document.body.appendChild(veil);
      buildWindow(d); focusWin(d);
      if (LANG === 'en' && window.I18N) window.I18N.apply(d);
      const done = (v) => { veil.remove(); renderTasks(); res(v); };
      d.querySelector('[data-y]').onclick = () => done(inp.value.trim() || value);
      d.querySelector('[data-n]').onclick = () => done(null);
      d.querySelector('[aria-label=Close]').onclick = () => done(null);
      inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') d.querySelector('[data-y]').click(); });
      inp.select(); inp.focus();
    });
  }
  async function saveProject() {
    const list = await projList();
    const name = await ask('Salvar projeto', 'Nome do projeto', `${T('Projeto')} ${list.length + 1}`);
    if (!name) return;
    const i = list.findIndex((p) => p.name === name);
    const p = { name, at: Date.now(), v: snapshot() };
    if (i >= 0) list[i] = p; else list.unshift(p);
    await kv.set(projKey(), list.slice(0, 30));
    toastMsg('💾', T('Projeto salvo') + ': ' + name);
    renderProjects();
  }
  function toastMsg(icon, msg) {
    document.querySelector('.toast')?.remove();
    const t = document.createElement('div');
    t.className = 'toast window';
    t.innerHTML = `<div class="window-body"><div class="toast-row" style="margin:0"><span class="toast-ico">${icon}</span><span class="toast-txt"><b></b></span></div></div>`;
    t.querySelector('b').textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3500);
  }
  async function renderProjects() {
    const w = document.getElementById('os-proj');
    if (!w) return;
    const list = await projList(), box = w.querySelector('.proj-list');
    box.innerHTML = list.length ? '' : `<p class="hint">${T('Nenhum projeto salvo nesta ferramenta ainda.')}</p>`;
    list.forEach((p, i) => {
      const r = document.createElement('div');
      r.className = 'proj-row';
      r.innerHTML = `<span><b></b><small>${new Date(p.at).toLocaleString(LANG === 'en' ? 'en-US' : 'pt-BR', { dateStyle: 'short', timeStyle: 'short' })}</small></span><button data-o>${T('Abrir')}</button><button data-d title="${T('Apagar')}">🗑️</button>`;
      r.querySelector('b').textContent = p.name;
      r.querySelector('[data-o]').onclick = () => { restore(p.v); w.classList.add('closed'); renderTasks(); toastMsg('📂', T('Projeto aberto') + ': ' + p.name); };
      r.querySelector('[data-d]').onclick = async () => { list.splice(i, 1); await kv.set(projKey(), list); renderProjects(); };
      box.appendChild(r);
    });
  }
  function openProjects() {
    let w = document.getElementById('os-proj');
    if (!w) {
      w = document.createElement('section');
      w.className = 'window os-proj';
      w.id = 'os-proj';
      w.dataset.title = 'Projetos salvos';
      w.dataset.icon = '📂';
      w.innerHTML = `<div class="window-body"><div class="stack">
        <div class="proj-list"></div>
        <div class="btns"><button data-s>💾 Salvar o atual</button><button data-e>⬇️ Exportar (.json)</button><button data-i>⬆️ Importar</button></div>
        <p class="hint">Guarda os textos, cores e opções da ferramenta neste navegador. Imagens e vídeos não entram: escolha de novo depois de abrir.</p>
        <div class="btns end"><button data-x>OK</button></div></div></div>`;
      document.body.appendChild(w);
      buildWindow(w);
      if (LANG === 'en' && window.I18N) window.I18N.apply(w);
      w.querySelector('[data-x]').onclick = () => { w.classList.add('closed'); renderTasks(); };
      w.querySelector('[data-s]').onclick = saveProject;
      w.querySelector('[data-e]').onclick = async () => {
        const list = await projList();
        const blob = new Blob([JSON.stringify({ editools: 1, tool: here(), projects: list.length ? list : [{ name: T('Projeto'), at: Date.now(), v: snapshot() }] }, null, 1)], { type: 'application/json' });
        download(blob, here().replace('.html', '') + '-projetos.json', { keep: false });
      };
      w.querySelector('[data-i]').onclick = async () => {
        const f = await pickFile('.json,application/json');
        if (!f) return;
        try {
          const j = JSON.parse(await f.text());
          if (j.tool && j.tool !== here()) return dialog(T('Projeto de outra ferramenta'), T('Esse arquivo é de outra ferramenta') + `: ${j.tool}`, '⚠️');
          const list = await projList();
          for (const p of j.projects || []) if (p && p.v) list.unshift(p);
          await kv.set(projKey(), list.slice(0, 30));
          renderProjects();
        } catch { dialog(T('Arquivo inválido'), T('Não consegui ler esse arquivo de projeto.'), '⚠️'); }
      };
    }
    renderProjects();
    openWin('os-proj');
  }
  function mountProjects() {
    if (!projectsOn()) return;
    const tb = document.querySelector('.window.app .toolbar');
    if (!tb) return;
    const spacer = tb.querySelector('.spacer');
    const html = `<button data-proj="save" title="Salvar projeto (Ctrl+S)">💾 Salvar</button><button data-proj="open" title="Projetos salvos (Ctrl+O)">📂 Projetos</button>`;
    if (spacer) spacer.insertAdjacentHTML('beforebegin', html); else tb.insertAdjacentHTML('beforeend', html);
    tb.querySelector('[data-proj=save]').onclick = saveProject;
    tb.querySelector('[data-proj=open]').onclick = openProjects;
  }

  // ---------- Utilitários ----------
  /** Baixa o arquivo, guarda em "Meus arquivos" e oferece "Enviar para…". */
  function download(blob, name, { keep = true } = {}) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    if (keep) { files.add(blob, name).catch(() => {}); toast(blob, name); }
  }

  /** Ferramentas que abrem esse tipo de arquivo. */
  const targetsFor = (type) => TOOLS.filter((t) => t.accept && new RegExp(t.accept).test(type || ''));

  /** Abre outra ferramenta já com o arquivo carregado. */
  async function sendTo(blob, name, file) {
    await kv.set('inbox', { blob, name, type: blob.type, to: file, at: Date.now() });
    location.href = file;
  }

  // A ferramenta que abrir recebe o arquivo da caixa de entrada (de "Enviar para…" ou de um ícone).
  const inbox = kv.get('inbox').then((it) => (it && it.to === here() && Date.now() - it.at < 5 * 60e3 ? it : null));
  let inboxTaken = false;
  function onInbox(fn, accept = /./) {
    inbox.then((it) => {
      if (!it || inboxTaken || !accept.test(it.type || '')) return;
      inboxTaken = true;
      kv.del('inbox');
      fn(new File([it.blob], it.name, { type: it.type }));
    });
  }

  /** Menu "Enviar para…" ancorado num botão. */
  function sendMenu(anchor, blob, name) {
    document.querySelector('.sendmenu')?.remove();
    const list = targetsFor(blob.type).filter((t) => t.file !== here());
    const m = document.createElement('div');
    m.className = 'sendmenu startmenu';
    m.innerHTML = list.length
      ? list.map((t) => `<button class="sm-item" data-f="${t.file}"><span>${t.icon}</span>${t.name}</button>`).join('')
      : '<div class="sm-label" style="padding:8px 12px">Nenhuma ferramenta abre esse tipo de arquivo.</div>';
    document.body.appendChild(m);
    const r = anchor.getBoundingClientRect();
    m.style.left = Math.max(4, Math.min(r.left, innerWidth - 270)) + 'px';
    m.style.bottom = Math.max(4, innerHeight - r.top + 4) + 'px';
    m.style.top = 'auto';
    m.onclick = (e) => { const b = e.target.closest('[data-f]'); if (b) sendTo(blob, name, b.dataset.f); };
    setTimeout(() => document.addEventListener('click', function off(e) { if (!m.contains(e.target)) { m.remove(); document.removeEventListener('click', off); } }), 0);
  }

  function toast(blob, name) {
    document.querySelector('.toast')?.remove();
    const t = document.createElement('div');
    t.className = 'toast window';
    t.innerHTML = `<div class="window-body"><div class="toast-row"><span class="toast-ico">✅</span><span class="toast-txt"><b></b><small>Baixado e guardado em Meus arquivos</small></span><button class="toast-x" aria-label="Fechar">✕</button></div>
      <div class="btns">${targetsFor(blob.type).some((x) => x.file !== here()) ? '<button data-t="send">➡️ Enviar para…</button>' : ''}<button data-t="files">📂 Meus arquivos</button></div></div>`;
    t.querySelector('b').textContent = name;
    document.body.appendChild(t);
    let timer;
    const arm = () => { clearTimeout(timer); timer = setTimeout(() => t.remove(), 9000); };
    t.onmouseenter = () => clearTimeout(timer);
    t.onmouseleave = arm;
    arm();
    t.querySelector('.toast-x').onclick = () => t.remove();
    t.querySelector('[data-t=files]').onclick = () => (location.href = 'arquivos.html');
    const s = t.querySelector('[data-t=send]');
    if (s) s.onclick = (e) => { e.stopPropagation(); clearTimeout(timer); sendMenu(s, blob, name); };
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
    onInbox(onFile, accept);
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

  /** Abas: [role=tablist] com botões [data-tab=idDoPainel]. */
  function showTab(id) {
    const tab = document.querySelector(`[data-tab="${id}"]`);
    if (!tab) return;
    tab.closest('[role=tablist]').querySelectorAll('[data-tab]').forEach((t) => {
      t.setAttribute('aria-selected', t === tab);
      const p = document.getElementById(t.dataset.tab);
      if (p) p.hidden = t !== tab;
    });
    document.dispatchEvent(new CustomEvent('tabchange', { detail: id }));
  }

  function slug(s) { return (s || 'arquivo').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\w-]+/g, '-').replace(/^-|-$/g, '').toLowerCase() || 'arquivo'; }

  // ---------- Propriedades de vídeo: papel de parede e proteção de tela ----------
  const SAVERS = { off: 'Nenhuma', dvd: 'Logo quicando', stars: 'Campo estelar', lines: 'Linhas mágicas', marquee: 'Letreiro', rain: 'Chuva de código' };
  function openSettings() {
    let w = document.getElementById('os-settings');
    if (w) return openWin('os-settings');
    w = document.createElement('section');
    w.className = 'window os-settings';
    w.id = 'os-settings';
    w.dataset.title = 'Propriedades de Vídeo';
    w.dataset.icon = '🖥️';
    const opt = (o, cur) => Object.entries(o).map(([k, v]) => `<option value="${k}"${k === cur ? ' selected' : ''}>${v.name || v}</option>`).join('');
    const wall = store.get('wall', 'theme');
    w.innerHTML = `<div class="window-body"><div class="stack">
      <div class="set-monitor"><div class="set-screen"></div></div>
      <fieldset><legend>Papel de parede</legend><div class="stack">
        <select id="setWall">${opt(WALLS, wall.startsWith('#') ? 'color' : wall)}<option value="color"${wall.startsWith('#') ? ' selected' : ''}>Cor sólida…</option><option value="image"${wall === 'image' ? ' selected' : ''}>Minha imagem…</option></select>
        <div class="row" id="setColorRow"><span class="lbl">Cor</span><input type="color" id="setColor" value="${wall.startsWith('#') ? wall : '#008080'}"></div>
        <div class="row" id="setImgRow"><button id="setImg">🖼️ Escolher imagem</button><select id="setFit" style="flex:1"><option value="cover">Preencher</option><option value="contain">Ajustar</option><option value="auto">Lado a lado</option></select></div>
      </div></fieldset>
      <fieldset><legend>Proteção de tela</legend><div class="stack">
        <div class="row"><select id="setSaver" style="flex:1">${opt(SAVERS, store.get('saver', 'off'))}</select><button id="setPreview">Visualizar</button></div>
        <div class="row"><span class="lbl">Aguardar</span><select id="setWait" style="flex:1">${[1, 2, 5, 10, 15].map((m) => `<option value="${m}"${+store.get('saverWait', 5) === m ? ' selected' : ''}>${m} min</option>`).join('')}</select></div>
        <label class="field" id="setTextRow"><span>Texto do letreiro / logo</span><input type="text" id="setText" value=""></label>
      </div></fieldset>
      <div class="field-row"><input type="checkbox" id="setHelper"${store.get('helper', 'on') === 'on' ? ' checked' : ''}><label for="setHelper">Mostrar o Disquinho (ajudante de dicas)</label></div>
      <div class="btns end"><button id="setOk">OK</button></div>
    </div></div>`;
    document.body.appendChild(w);
    w.querySelector('#setText').value = store.get('saverText', 'EdiTools');
    buildWindow(w);
    if (LANG === 'en' && window.I18N) window.I18N.apply(w);
    const $ = (id) => w.querySelector('#' + id);
    const sync = () => {
      $('setColorRow').hidden = $('setWall').value !== 'color';
      $('setImgRow').hidden = $('setWall').value !== 'image';
      $('setTextRow').hidden = !['dvd', 'marquee'].includes($('setSaver').value);
      $('setFit').value = store.get('wallfit', 'cover');
    };
    $('setWall').onchange = async () => {
      const v = $('setWall').value;
      if (v === 'color') store.set('wall', $('setColor').value);
      else if (v === 'image') { if (await kv.get('wallimg')) store.set('wall', 'image'); else return $('setImg').click(); }
      else store.set('wall', v);
      applyWall(); sync();
    };
    $('setColor').oninput = () => { store.set('wall', $('setColor').value); applyWall(); };
    $('setImg').onclick = async () => {
      const f = await pickFile('image/*');
      if (!f) return;
      await kv.set('wallimg', f);
      store.set('wall', 'image'); applyWall(); sync();
    };
    $('setFit').onchange = () => { store.set('wallfit', $('setFit').value); applyWall(); };
    $('setSaver').onchange = () => { store.set('saver', $('setSaver').value); sync(); };
    $('setWait').onchange = () => store.set('saverWait', $('setWait').value);
    $('setText').oninput = () => store.set('saverText', $('setText').value);
    $('setPreview').onclick = () => saver.start($('setSaver').value === 'off' ? 'dvd' : $('setSaver').value);
    $('setHelper').onchange = () => { store.set('helper', $('setHelper').checked ? 'on' : 'off'); $('setHelper').checked ? helper.show(true) : helper.hide(); };
    $('setOk').onclick = () => { w.classList.add('closed'); renderTasks(); };
    sync();
    focusWin(w);
  }

  const saver = (() => {
    let cv, raf, idle, on = false;
    const wait = () => +store.get('saverWait', 5) * 60e3;
    const busy = () => [...document.querySelectorAll('video, audio')].some((m) => !m.paused) || document.querySelector('progress:not([hidden])');
    function arm() {
      clearTimeout(idle);
      if (on) stop();
      if (store.get('saver', 'off') === 'off') return;
      idle = setTimeout(() => (busy() ? arm() : start(store.get('saver'))), wait());
    }
    function start(kind) {
      if (on) return;
      on = true;
      cv = document.createElement('canvas');
      cv.className = 'saver';
      document.body.appendChild(cv);
      const x = cv.getContext('2d');
      const fit = () => { cv.width = innerWidth; cv.height = innerHeight; };
      fit(); addEventListener('resize', fit);
      const text = store.get('saverText', 'EdiTools') || 'EdiTools';
      const W = () => cv.width, H = () => cv.height;
      let st = {};
      const hue = () => `hsl(${(Date.now() / 20) % 360} 90% 60%)`;
      const init = {
        dvd: () => (st = { x: 50, y: 50, vx: 2.2, vy: 1.8, c: hue() }),
        stars: () => (st = { s: [...Array(400)].map(() => ({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: Math.random() })) }),
        lines: () => (st = { p: [...Array(4)].map(() => ({ x: Math.random() * W(), y: Math.random() * H(), vx: (Math.random() - .5) * 8, vy: (Math.random() - .5) * 8 })), trail: [] }),
        marquee: () => (st = { x: W() }),
        rain: () => (st = { cols: [...Array(Math.ceil(W() / 16))].map(() => Math.random() * -50) }),
      };
      const draw = {
        dvd() {
          x.fillStyle = '#000'; x.fillRect(0, 0, W(), H());
          x.font = `bold ${Math.max(40, W() / 14)}px Tahoma, sans-serif`;
          const tw = x.measureText(text).width, th = Math.max(40, W() / 14);
          st.x += st.vx; st.y += st.vy;
          if (st.x < 0 || st.x + tw > W()) { st.vx *= -1; st.c = hue(); st.x = Math.max(0, Math.min(st.x, W() - tw)); }
          if (st.y < th || st.y > H()) { st.vy *= -1; st.c = hue(); st.y = Math.max(th, Math.min(st.y, H())); }
          x.fillStyle = st.c; x.fillText(text, st.x, st.y);
        },
        stars() {
          x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(0, 0, W(), H());
          x.fillStyle = '#fff';
          for (const s of st.s) {
            s.z -= .008; if (s.z <= .01) { s.z = 1; s.x = Math.random() * 2 - 1; s.y = Math.random() * 2 - 1; }
            const px = W() / 2 + s.x / s.z * W() / 2, py = H() / 2 + s.y / s.z * H() / 2, r = (1 - s.z) * 3;
            x.fillRect(px, py, r, r);
          }
        },
        lines() {
          x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(0, 0, W(), H());
          for (const p of st.p) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W()) p.vx *= -1; if (p.y < 0 || p.y > H()) p.vy *= -1; }
          x.strokeStyle = hue(); x.lineWidth = 2;
          x.beginPath(); st.p.forEach((p, i) => (i ? x.lineTo(p.x, p.y) : x.moveTo(p.x, p.y))); x.closePath(); x.stroke();
        },
        marquee() {
          x.fillStyle = '#000'; x.fillRect(0, 0, W(), H());
          const fs = Math.max(60, H() / 5);
          x.font = `bold ${fs}px Tahoma, sans-serif`; x.fillStyle = hue(); x.textBaseline = 'middle';
          st.x -= 4; if (st.x < -x.measureText(text).width) st.x = W();
          x.fillText(text, st.x, H() / 2);
        },
        rain() {
          x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(0, 0, W(), H());
          x.fillStyle = '#3f3'; x.font = '15px monospace';
          st.cols.forEach((y, i) => {
            x.fillText(String.fromCharCode(0x30a0 + Math.random() * 96), i * 16, y * 16);
            st.cols[i] = y * 16 > H() && Math.random() > .975 ? 0 : y + 1;
          });
        },
      };
      (init[kind] || init.dvd)();
      x.fillStyle = '#000'; x.fillRect(0, 0, W(), H());
      const loop = () => { (draw[kind] || draw.dvd)(); raf = requestAnimationFrame(loop); };
      loop();
      cv._fit = fit;
      // dá um respiro pra o próprio clique de "Visualizar" não fechar
      setTimeout(() => ['pointermove', 'pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => addEventListener(e, stop, { once: true, capture: true })), 400);
    }
    function stop() {
      if (!on) return;
      on = false;
      cancelAnimationFrame(raf);
      removeEventListener('resize', cv._fit);
      cv.remove();
      arm();
    }
    ['pointermove', 'pointerdown', 'keydown', 'wheel', 'touchstart', 'scroll'].forEach((e) => addEventListener(e, () => !on && arm(), { passive: true }));
    return { arm, start, stop };
  })();

  // ---------- Disquinho: ajudante de dicas (personagem próprio, um disquete) ----------
  const TIPS = {
    '*': [
      'Arraste as janelas pela barra de título pra organizar a tela.',
      'Tudo que você baixa fica guardado em 📂 Meus arquivos. De lá dá pra mandar pra outra ferramenta.',
      'Depois de baixar, use "➡️ Enviar para…" pra abrir o resultado em outra ferramenta sem baixar de novo.',
      'Na área de trabalho, solte um arquivo em cima de um ícone pra abrir a ferramenta já com ele.',
      'Troque o tema no 🎨 da barra de tarefas: Windows 98, XP, 7, 11, macOS ou Linux.',
      'Ctrl+K abre a busca de ferramentas. No menu, a ☆ ao lado de cada uma deixa ela nos favoritos.',
      'O botão 💾 Salvar guarda as opções da ferramenta como projeto, pra abrir depois em 📂 Projetos.',
      'Menu Iniciar › Papel de parede e proteção de tela pra deixar a área de trabalho com a sua cara.',
      'Dá pra instalar o site como aplicativo e usar até sem internet (Menu Iniciar › Instalar).',
    ],
    'index.html': ['Clique duas vezes… brincadeira, um clique já abre a ferramenta.', 'As ferramentas com a etiqueta NOVO acabaram de chegar.'],
    'removedor.html': ['Cole uma imagem com Ctrl+V que ela já entra na fila.', 'No editor, o pincel "Restaurar" traz de volta partes que a IA apagou sem querer.'],
    'legenda.html': ['O modelo "Equilibrado" é um bom meio-termo entre velocidade e precisão.', 'Clique numa legenda da lista pra corrigir o texto ou o tempo.', 'Exporte em WEBM transparente pra jogar a legenda por cima do vídeo no editor.'],
    'chat.html': ['Escreva o roteiro como "A: mensagem" e "B: resposta". Cada linha vira uma mensagem.', 'Use o modo "Só as mensagens" com fundo transparente pra colocar a conversa por cima de outro vídeo.'],
    'scroll.html': ['No Chrome: F12 › Ctrl+Shift+P › "Capture full size screenshot" tira o print da página inteira.', 'Adicione paradas clicando no mapa da página à direita.'],
    'terminal.html': ['Linhas que começam com $ viram comandos. As outras são a saída.', 'Em "Animar digitação" o terminal vira vídeo, com os comandos sendo digitados.'],
    'thumbnail.html': ['Use a aba "Ver no feed" pra conferir se o texto ainda dá pra ler pequeno.', 'Arraste as camadas direto na thumbnail. A alça no canto muda o tamanho.'],
    'mockup.html': ['Funciona com vídeo também: o mockup é gravado enquanto o vídeo toca.', 'Fundo transparente + PNG = mockup pronto pra colocar em qualquer lugar.'],
    'audiograma.html': ['Escolha um trecho curto (até 60 s) pra postar em Reels e Shorts.', 'Coloque uma capa: ela aparece no centro do estilo circular.'],
    'textoanim.html': ['O efeito "Embaralhar" fica ótimo em títulos de tecnologia.', 'Atraso entre letras maior = efeito mais dramático.'],
    'baixador.html': ['Escolha "Só o áudio" pra já sair em MP3.', 'Depois de baixar, use "Enviar para…" pra legendar o vídeo na Legenda automática.'],
    'teia.html': ['Escreva com espaço no começo da linha pra criar galhos. A tecla Tab faz isso pra você.', 'Troque o Formato e o Estilo à vontade: o conteúdo continua o mesmo.', 'Arraste os itens na prévia pra deixar do seu jeito.'],
    'grafico.html': ['Coloque vários valores separados por ; e escolha "Corrida" pra fazer aquele ranking que troca de lugar.', 'Exporte em WEBM transparente pra colocar o gráfico por cima do vídeo.'],
    'termometro.html': ['O estilo Meta é ótimo pra live: mostra quanto falta pra bater a meta.', 'Coloque "Termina em" menor que "Começa em" pra o termômetro descer.'],
    'progresso.html': ['Ligue "Travadinhas" pra barra parar em alguns pontos, igual carregamento de verdade.'],
    'inscreva.html': ['Dá pra usar um botão feito no Criador de botões: exporte lá e use "Enviar para…".'],
    'cronometro.html': ['Use fundo transparente e coloque o cronômetro por cima da live ou do vídeo.'],
    'arquivos.html': ['Os arquivos ficam só neste navegador. Limpar os dados do site apaga tudo.'],
  };
  const helper = (() => {
    let el, i = 0;
    const tips = () => [...(TIPS[here()] || []), ...TIPS['*']];
    const svg = `<svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true"><rect x="4" y="4" width="56" height="56" rx="5" fill="#2d5bd3" stroke="#0e2a7a" stroke-width="2"/><rect x="16" y="4" width="32" height="18" fill="#c9d1db"/><rect x="36" y="7" width="7" height="12" fill="#2d5bd3"/><rect x="12" y="32" width="40" height="24" rx="2" fill="#fff"/><g class="dq-eyes"><ellipse cx="25" cy="42" rx="3.4" ry="4.4" fill="#111"/><ellipse cx="39" cy="42" rx="3.4" ry="4.4" fill="#111"/><circle cx="26" cy="40.5" r="1.1" fill="#fff"/><circle cx="40" cy="40.5" r="1.1" fill="#fff"/></g><path d="M27 50 q5 4 10 0" stroke="#111" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
    function build() {
      el = document.createElement('div');
      el.className = 'helper';
      el.innerHTML = `<div class="helper-bubble" hidden><p></p><div class="btns end"><button data-h="next">Próxima dica</button><button data-h="hide">Esconder</button></div></div><button class="helper-char" title="Disquinho: clique pra ver uma dica">${svg}</button>`;
      document.body.appendChild(el);
      el.querySelector('.helper-char').onclick = () => (el.querySelector('.helper-bubble').hidden ? say() : el.querySelector('.helper-bubble').hidden = true);
      el.querySelector('[data-h=next]').onclick = () => { i++; say(); };
      el.querySelector('[data-h=hide]').onclick = () => { store.set('helper', 'off'); hide(); };
    }
    function say() {
      const list = tips();
      const b = el.querySelector('.helper-bubble');
      b.querySelector('p').textContent = T(list[i % list.length]);
      b.hidden = false;
    }
    function show(talk) {
      if (!el) build();
      el.hidden = false;
      if (talk) say();
    }
    function hide() { if (el) el.hidden = true; }
    function boot() {
      if (store.get('helper', 'on') !== 'on' || document.body.hasAttribute('data-no-taskbar')) return;
      show(false);
      const seen = store.get('tipSeen:' + here());
      if (!seen && TIPS[here()]) setTimeout(() => { store.set('tipSeen:' + here(), '1'); say(); }, 2500);
    }
    return { show, hide, boot };
  })();

  // ---------- PWA ----------
  let installPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installPrompt = e; });
  function pwa() {
    if (!document.querySelector('link[rel=manifest]')) {
      document.head.insertAdjacentHTML('beforeend', '<link rel="manifest" href="manifest.webmanifest"><meta name="theme-color" content="#245edb"><link rel="apple-touch-icon" href="assets/icon-192.png">');
    }
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  window.OS = { THEMES, MODERN, setDark, isDark, favs, searchTools, saveProject, openProjects, showKeys, TOOLS, ADOBE, adobeIcon, setTheme, store, download, canvasBlob, pickFile, loadMedia, dropZone, onInbox, sendTo, sendMenu, targetsFor, files, kv, recordCanvas, videoMime, dialog, showTab, bindOutputs, openWin, focusWin, slug, openSettings, saver, helper, LANG, setLang, T, here };

  document.addEventListener('DOMContentLoaded', () => {
    pwa();
    document.querySelectorAll('.window[data-title]').forEach(buildWindow);
    if (!document.querySelector('link[rel=icon]')) {
      const ico = document.querySelector('.window.app')?.dataset.icon || '🖼️';
      const l = document.createElement('link');
      l.rel = 'icon';
      l.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${ico}</text></svg>`;
      document.head.appendChild(l);
    }
    document.querySelectorAll('[role=tablist] [data-tab]').forEach((b) => b.addEventListener('click', () => showTab(b.dataset.tab)));
    document.querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => openWin(b.dataset.open)));
    if (!document.body.hasAttribute('data-no-taskbar')) buildTaskbar();
    const first = document.querySelector('.window.app') || document.querySelector('.window[data-title]:not(.closed)');
    if (first) focusWin(first);
    bindOutputs();
    mountProjects();
    if (LANG === 'en' && window.I18N) window.I18N.start();
    helper.boot();
    saver.arm();
  });
})();
