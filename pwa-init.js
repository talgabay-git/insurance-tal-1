/* PWA init - טל גבאי תכנון פיננסי
   מזריק manifest + מטא-תגיות iOS, ורושם Service Worker.
   קובץ משותף אחד לכל העמודים - אין צורך לערוך כל עמוד בנפרד. */
(function () {
  var head = document.head;

  var manifestLink = document.createElement('link');
  manifestLink.rel = 'manifest';
  manifestLink.href = '/manifest.json';
  head.appendChild(manifestLink);

  var appleCapable = document.createElement('meta');
  appleCapable.name = 'apple-mobile-web-app-capable';
  appleCapable.content = 'yes';
  head.appendChild(appleCapable);

  var appleStatusBar = document.createElement('meta');
  appleStatusBar.name = 'apple-mobile-web-app-status-bar-style';
  appleStatusBar.content = 'black-translucent';
  head.appendChild(appleStatusBar);

  var appleTitle = document.createElement('meta');
  appleTitle.name = 'apple-mobile-web-app-title';
  appleTitle.content = 'טל גבאי';
  head.appendChild(appleTitle);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () {});
    });
  }
})();
