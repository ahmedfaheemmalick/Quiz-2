const version = "v1";

const cacheFiles = [
    "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple",
    'https://a-quiz-app-2.netlify.app/static/js/vendors~main.chunk.js',
    '/static/media/bg.38c377ac.jpg',
    "/static/js/bundle.js",
    "/static/js/1.chunk.js",
    "/static/js/main.chunk.js",
    '/manifest.json',
    '/favicon.ico',
    "/logo192.png",
    '/sockjs-node',
    "/index.html",
    "/",
];

self.addEventListener("install", (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(version).then((cache) => {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
});

const options = {
    ignoreSearch: true,
    ignoreMethod: true,
    ignoreVary: true,
};

self.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches
                .match(event.request, options)
                .then((response) => {
                    if (response) {
                        return response || fetch.response;
                    }
                })
                .catch((err) => {
                    console.log("err", err);
                })
        );
    }
});