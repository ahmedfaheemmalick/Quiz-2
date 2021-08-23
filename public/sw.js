let version = "v1";

let cacheFiles = [
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/vendors~main.chunk.js',
    '/static/js/main.chunk.js',
    'https://fonts.googleapis.com/css2?family=Lato&display=swap',
    '/static/media/bg.38c377ac.jpg',
    '/static/media/NeonTubes2.f01f7e70.otf',
    '/manifest.json',
    'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple',
    '/favicon.ico',
    '/logo192.svg',
    '/logo192.png',
    '/index.html',
    '/'
];

this.addEventListener("install", (e) => {
    this.skipWaiting();
    e.waitUntil(
        caches.open(version).then((cache) => {
            return cache.addAll(cacheFiles);
        })
    );
});

this.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
});

const options = {
    ignoreSearch: true,
    ignoreMethod: true,
    ignoreVary: true,
};

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches
                .match(event.request, options)
                .then((response) => {
                    if (response) {
                        // console.log(response);
                        return response || fetch.response;
                    }
                })
                .catch((err) => {
                    console.log("err", err);
                })
        );
    }
});