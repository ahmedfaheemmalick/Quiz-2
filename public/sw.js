// let version = "v1";

// // let cacheFiles = [
// //     '/static/js/bundle.js',
// //     '/static/js/0.chunk.js',
// //     '/static/js/vendors~main.chunk.js',
// //     '/static/js/main.chunk.js',
// //     'https://fonts.googleapis.com/css2?family=Lato&display=swap',
// //     '/static/media/bg.38c377ac.jpg',
// //     '/static/media/NeonTubes2.f01f7e70.otf',
// //     '/manifest.json',
// //     'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple',
// //     '/favicon.ico',
// //     '/logo192.svg',
// //     '/logo192.png',
// //     '/index.html',
// //     '/'
// // ];

// this.addEventListener("install", (e) => {
//     this.skipWaiting();
//     e.waitUntil(
//         caches.open(version).then((cache) => {
//             return cache.addAll([
//                 '/static/js/bundle.js',
//                 '/static/js/0.chunk.js',
//                 '/static/js/vendors~main.chunk.js',
//                 '/static/js/main.chunk.js',
//                 'https://fonts.googleapis.com/css2?family=Lato&display=swap',
//                 '/static/media/bg.38c377ac.jpg',
//                 '/static/media/NeonTubes2.f01f7e70.otf',
//                 '/manifest.json',
//                 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple',
//                 '/favicon.ico',
//                 '/logo192.svg',
//                 '/logo192.png',
//                 '/index.html',
//                 '/'
//             ]);
//         })
//     );
// });

// this.addEventListener("activate", function (e) {
//     console.log("[ServiceWorker] Activate");
// });

// const options = {
//     ignoreSearch: true,
//     ignoreMethod: true,
//     ignoreVary: true,
// };

// this.addEventListener("fetch", (event) => {
//     if (!navigator.onLine) {
//         event.respondWith(
//             caches
//                 .match(event.request, options)
//                 .then((response) => {
//                     if (response) {
//                         // console.log(response);
//                         return response || fetch.response;
//                     }
//                 })
//                 .catch((err) => {
//                     console.log("err", err);
//                 })
//         );
//     }
// });




var cacheName = 'demo-app';


var filesToCache = [
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

this.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
});

this.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

this.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});