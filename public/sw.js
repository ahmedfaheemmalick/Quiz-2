const version = 'v1';

const cacheFiles = [
    // './static/js/vendors~main.chunk.js',
    // './static/media/bg.38c377ac.jpg',
    // './manifest.json',
    // './favicon.ico',
    // './sockjs-node',
    // './static/js/main.chunk.js',
    // './static/js/1.chunk.js',
    // './static/js/bundle.js',
    // './logo192.png',
    // './index.html',




    'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple',
    '/static/css/main.643a1f75.chunk.css',
    '/static/js/main.752a7604.chunk.js',
    '/static/js/2.fbceb4e8.chunk.js',
    '/static/media/bg.38c377ac.jpg',
    '/manifest.json',
    '/favicon.ico',
    '/sw.js',
    './',
];

this.addEventListener('install', e => {
    e.waitUntil(
        caches.open(version).then(cache => {
            return cache.addAll(cacheFiles);
        })
    );
});

this.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
});

const options = {
    ignoreSearch: true,
    ignoreMethod: true,
    ignoreVary: true,
};

this.addEventListener('fetch', (event) => {
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
                    console.log('err', err);
                })
        );
    }
});