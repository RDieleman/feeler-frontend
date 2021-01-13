/* eslint-disable no-restricted-globals */
const logMessage = (message, obj) => {
    console.log(`[Service Worker] ${message}`);
}
// Cache info
const cacheVersion = 1;
const cacheNameStatic = 'static';
const cacheNameDynamic = 'dynamic';

//Targets to cache in the static cache
const cacheTargets = [
    "/manifest.json",

    "/",
    "/explore",
    "/overview",
    "/shelf",
    "/shelf/read",
    "/shelf/unread",
    "/shelf/reading",

    "/images/icons/favicon.ico",
    "/images/icons/icon-512x512.png",
    "/images/icons/icon-add.svg",
    "/images/icons/icon-apple-x192.png",
    "/images/icons/icon-bookshelf.svg",
    "/images/icons/icon-error.png",
    "/images/icons/icon-explore.svg",
    "/images/icons/icon-finish.svg",
    "/images/icons/icon-next.svg",
    "/images/icons/icon-options.svg",
    "/images/icons/icon-previous.svg",
    "/images/icons/icon-remove.svg",
    "/images/icons/icon-start-reading.svg",
    "/images/icons/icon-stop-reading.svg",
    "/images/icons/maskable_icon_x72.png",
    "/images/icons/maskable_icon_x96.png",
    "/images/icons/maskable_icon_x128.png",
    "/images/icons/maskable_icon_x144.png",
    "/images/icons/maskable_icon_x152.png",
    "/images/icons/maskable_icon_x384.png",
    "/images/icons/maskable_icon_x512.png",
    "/images/icons/icon-install.svg",
    "/images/logo.svg",

    "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
    "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2",
];

// Service worker install event
self.addEventListener("install", (event) => {
    logMessage('Installing Service Worker...');
    event.waitUntil(
        //Open or create static cache
        InitCache()
    );
});

async function InitCache() {
    await caches.open(`${cacheNameStatic}-v${cacheVersion}`)
        //Add static items to cache
        .then(async (cache) => {
            logMessage('Precaching App Shell');
            await cache.addAll(cacheTargets);
        })
}


//Service worker activate event
self.addEventListener("activate", (event) => {
    logMessage('Activating Service Worker...');
    //delete old caches
    event.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key !== `${cacheNameStatic}-v${cacheVersion}` && key !== cacheNameDynamic) {
                        logMessage('Removing old cache', key);
                        return caches.delete(key);
                    }
                }));
            })
    );
    return self.clients.claim();
});

//Service worker fetch event
self.addEventListener("fetch", (event) => {
    event.respondWith(
        //Try to fetch resource from caches
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    //Return found resource
                    if (event.request.url === `http://localhost:8080/user/1`) {
                        return fetch(event.request).then(response => {
                            if (response.ok) {
                                return caches.open(cacheNameDynamic)
                                    .then((cache) => {
                                        cache.put(event.request.url, response.clone());
                                        return response;
                                    })
                            }
                        });
                    }
                    return response;
                } else {
                    //Fetch new resource
                    return fetch(event.request)
                        .then((res) => {
                            //Only cache get methods
                            if (event.request.method !== "GET") {
                                return res;
                            } else {
                                //Open or create dynamic cache
                                return caches.open(cacheNameDynamic)
                                    .then((cache) => {
                                        //Add new resource and return result
                                        cache.put(event.request.url, res.clone());
                                        return res;
                                    })
                            }
                        });
                }
            })
    )
});