/* Service worker do EdiTools: deixa o site abrir offline.
   Páginas: tenta a rede primeiro (pra pegar atualização) e cai no cache sem internet.
   Bibliotecas e fontes das CDNs: cache primeiro, atualizando por trás. */
const VERSION = 'imapng-v7';
const SHELL = [
  './',
  'arquivos.html',
  'audio.html',
  'audiograma.html',
  'baixador.html',
  'botoes.html',
  'camera.html',
  'chat.html',
  'contador.html',
  'cronometro.html',
  'dvdficar.html',
  'grafico.html',
  'gradiente.html',
  'index.html',
  'inscreva.html',
  'legenda.html',
  'letras.html',
  'links.html',
  'mockup.html',
  'peixe.html',
  'petpet.html',
  'pixelador.html',
  'popup.html',
  'progresso.html',
  'removedor.html',
  'scripts.html',
  'scroll.html',
  'terminal.html',
  'texto3d.html',
  'textoanim.html',
  'texturas.html',
  'thumbnail.html',
  'tv.html',
  'vhs.html',
  'assets/encode.js',
  'assets/export.js',
  'assets/glfx.js',
  'assets/i18n.js',
  'assets/icon-192.png',
  'assets/icon-512.png',
  'assets/icon-maskable.png',
  'assets/media-tool.js',
  'assets/macos.css',
  'assets/mp3.js',
  'assets/os.css',
  'assets/os.js',
  'assets/petpet.gif',
  'assets/petpet-hand.js',
  'manifest.webmanifest',
];
const CDN = /^https:\/\/(unpkg\.com|cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com|fonts\.googleapis\.com|fonts\.gstatic\.com)\//;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('imapng-') && k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // no-cache: confere com o servidor, pra nunca entregar uma versão velha guardada pelo navegador
    e.respondWith(fetch(req.mode === 'navigate' ? req.url : req, { cache: 'no-cache' }).then((r) => {
      if (r.ok) { const copy = r.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
      return r;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('index.html'))));
  } else if (CDN.test(req.url)) {
    e.respondWith(caches.open(VERSION).then(async (c) => {
      const hit = await c.match(req);
      const net = fetch(req).then((r) => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
  }
});
