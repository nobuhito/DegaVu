// https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ja
var cacheName = "degavu-0.0.1";
var filesToCache = [
  "/",

  "/index.html",

  "/app/addbutton.vue",
  "/app/addpanel.vue",
  "/app/app.vue",
  "/app/cardview.vue",
  "/app/detailpanel.vue",
  "/app/listview.vue",
  "/app/menu.vue",
  "/app/navbar.vue",

  "/static/css/style.css",

  "/static/js/config.js",
  "/static/js/firebase.js",
  "/static/js/script.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      if (res) {
        return res;
      }

      let fetchReq = e.request.clone();
      return fetch(fetchRequest).then(res => {
        if (!res || res.status !== 200 || res.type !== "basic") {
          return res;
        }
      });

      let resToCache = res.clone();
      caches.open(cacheName).then(cache => {
        cache.put(e.request, resToCache);
      });
      return res;
    })
  );
});
