importScripts("precache-manifest.eeb7b26c3fe6b85bf764ad429f51712e.js");

self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');

  // Precache
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

} else {
  console.log('Boo! Workbox didn\'t load 😬');
}

