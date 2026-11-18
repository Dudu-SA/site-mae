// Darling Soares — service worker. Guarda só o visual (página, logo, ícones) para o app abrir rápido.
// Os dados (imóveis, clientes, arquivos) vêm sempre do Firebase e nunca ficam guardados aqui.
const CACHE = "ds-v1";
const BASE = ["/", "/index.html", "/conexao.js", "/img/marca-ds.svg", "/img/app-192.png", "/manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(BASE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    for (const n of await caches.keys()) if (n !== CACHE) await caches.delete(n);
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;   // Firebase, fontes e mapa: direto da internet
  // a página: sempre a versão nova quando há internet; sem internet, a guardada
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then((r) => { const c = r.clone(); caches.open(CACHE).then((x) => x.put("/", c)); return r; })
      .catch(() => caches.match("/")));
    return;
  }
  // logo, ícones e o arquivo de conexão: da internet, com a cópia guardada como reserva
  e.respondWith(fetch(req).then((r) => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then((x) => x.put(req, c)); } return r; })
    .catch(() => caches.match(req)));
});
