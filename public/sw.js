console.log('registered')

let cacheData = 'appv1'

this.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheData).then(cache => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/0.chunk.js',
                '/static/js/vendors-main.chunk.js',
                '/static/js/main.chunk.js',
                'https://fonts.googleapis.com/css2?family=Lato&display=swap',
                '/static/media/bg.38c377ac.jpg',
                '/static/media/NeonTubes2.f01f7e70.otf',
                '/manifest.json',
                'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple',
                '/favicon.ico',
                '/logo192.svg',
                '/index.html',
                '/'
            ])
        }).catch(error => {
            console.log('error', error)
        })
    )
})

this.addEventListener('fetch', e => {
    if (!navigator.onLine) {
        e.respondWith(
            caches.match(e.request).then((result) => {
                if (result) {
                    return result
                }
            })
        )
    }
})
