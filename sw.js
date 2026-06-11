// Service worker mínimo: habilita la instalación de la PWA.
// NO cachea el HTML (para evitar versiones viejas) — deja que la red maneje todo.
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(event){
  // Network passthrough: no interceptamos para no servir contenido cacheado/viejo.
});
