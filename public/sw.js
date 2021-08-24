const version = 'v1';

const cacheFiles = [
    // 'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple',
    // './static/css/main.643a1f75.chunk.css',
    // './static/js/main.752a7604.chunk.js',
    // './static/js/2.fbceb4e8.chunk.js',
    // './static/media/bg.38c377ac.jpg',
    // './manifest.json',
    // './favicon.ico',
    // './sw.js',


    './build/static/js/2.fbceb4e8.chunk.js',
    './build/static/js/main.11a88bf6.chunk.js',
    './build/static/css/main.643a1f75.chunk.css',
    './build/static/js/runtime-main.8df60c40.js',
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