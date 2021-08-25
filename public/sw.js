const version = 'v1';

const cacheFiles = [
    'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple',
    'https://fonts.googleapis.com/css2?family=Lato&display=swap',
    '/static/media/NeonTubes2.f01f7e70.ot',
    '/static/css/main.460d2731.chunk.css',
    '/static/css/main.e490db62.chunk.css',
    '/static/js/2.fbceb4e8.chunk.js',
    '/static/js/main.055c7808.chunk.js',
    '/static/media/bg.38c377ac.jpg',
    '/manifest.json',
    '/favicon.ico',
    '/logo192.png',
    '/',
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