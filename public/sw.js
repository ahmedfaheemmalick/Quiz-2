const version = 'v1';

const cacheFiles = [
    // 'https://a-quiz-app-2.netlify.app/static/js/vendors~main.chunk.js',
    // 'https://a-quiz-app-2.netlify.app/static/media/bg.38c377ac.jpg',
    // 'https://a-quiz-app-2.netlify.app/manifest.json',
    // 'https://a-quiz-app-2.netlify.app/favicon.ico',
    // 'https://a-quiz-app-2.netlify.app/sockjs-node',


    'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple',
    './static/js/main.chunk.js',
    './static/js/1.chunk.js',
    './static/js/bundle.js',
    './logo192.png',
    'https://a-quiz-app-2.netlify.app/index.html',
    'https://a-quiz-app-2.netlify.app/',
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