const CACHE_NAMNE = 'v1_vue_todo_app'
const urlsToCache = [
  './?umt_source=web_app_manifest',
  "./public/manifest.json"
]

self.addEventListener('install', e => {
  e.waitUntil(async () => {
    const cache = await caches.open(CACHE_NAMNE)
    await cache.addAll(urlsToCache)
  })})

self.addEventListener('activate', e => {
  const cacheWhiteList = [CACHE_NAMNE]
  e.waitUntil(caches.keys()
    .then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    }
    ).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function(res){
      return res || requestBackend(event);
    })
  )
});

function requestBackend(event){
  var url = event.request.clone();
  return fetch(url).then(function(res){
      if(!res || res.status !== 200 || res.type !== 'basic'){
          return res;
      }

      var response = res.clone();

      caches.open(CACHE_NAMNE).then(function(cache){
          cache.put(event.request, response);
      });

      return res;
  })
}