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

  /* ---- כפתור "התקינו את האתר כאפליקציה" בתפריט הנייד ---- */
  var isHe = document.documentElement.lang.indexOf('he') === 0;
  var t = isHe ? {
    menu: 'התקינו את האתר כאפליקציה',
    title: 'התקנת האתר כאפליקציה',
    iosStep1: 'הקישו על כפתור השיתוף בסרגל הכלים של Safari',
    iosStep2: 'גללו למטה ובחרו "הוסף למסך הבית"',
    generic: 'פתחו את תפריט הדפדפן ובחרו "התקן אפליקציה" או "הוסף למסך הבית"',
    close: 'הבנתי'
  } : {
    menu: 'Install this site as an app',
    title: 'Install this site as an app',
    iosStep1: "Tap the Share button in Safari's toolbar",
    iosStep2: 'Scroll down and choose "Add to Home Screen"',
    generic: 'Open your browser menu and choose "Install app" or "Add to Home Screen"',
    close: 'Got it'
  };

  var deferredPrompt = null;
  var isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
  });

  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    var item = document.getElementById('pwa-install-item');
    if (item) item.remove();
  });

  function showInstallModal(steps) {
    if (document.getElementById('pwa-install-modal')) return;
    var modal = document.createElement('div');
    modal.id = 'pwa-install-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', t.title);
    modal.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(13,30,53,.75);display:flex;align-items:center;justify-content:center;padding:1.25rem;';
    var stepsHtml = steps.map(function (s) {
      return '<p style="margin:0 0 .6rem;color:#333;font-size:.92rem;line-height:1.6;">' + s + '</p>';
    }).join('');
    modal.innerHTML =
      '<div style="background:#fff;border-radius:14px;max-width:340px;width:100%;padding:1.5rem;text-align:center;">' +
        '<div style="font-size:1.6rem;color:#0d1e35;margin-bottom:.5rem;"><i class="fa-solid fa-mobile-screen-button" aria-hidden="true"></i></div>' +
        '<h3 style="margin:0 0 .75rem;color:#0d1e35;font-size:1.05rem;">' + t.title + '</h3>' +
        stepsHtml +
        '<button type="button" id="pwa-install-modal-close" style="margin-top:.5rem;background:#0d1e35;color:#c9a84c;border:none;border-radius:8px;padding:.6rem 1.5rem;font-size:.9rem;font-weight:700;cursor:pointer;">' + t.close + '</button>' +
      '</div>';
    document.body.appendChild(modal);
    var close = function () { modal.remove(); };
    document.getElementById('pwa-install-modal-close').addEventListener('click', close);
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
  }

  function handleInstallClick(e) {
    e.preventDefault();
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.finally(function () { deferredPrompt = null; });
    } else if (isIOS) {
      showInstallModal([t.iosStep1, t.iosStep2]);
    } else {
      showInstallModal([t.generic]);
    }
  }

  function injectInstallMenuItem() {
    if (isStandalone) return;
    var list = document.querySelector('.mobile-nav-list');
    if (!list || document.getElementById('pwa-install-item')) return;
    var li = document.createElement('li');
    li.id = 'pwa-install-item';
    var a = document.createElement('a');
    a.href = '#';
    a.className = 'mobile-nav-link';
    a.innerHTML = '<i class="fa-solid fa-mobile-screen-button" aria-hidden="true" style="margin-left:.35rem;color:var(--gold-text,#c9a84c);"></i> ' + t.menu;
    a.addEventListener('click', handleInstallClick);
    li.appendChild(a);
    list.appendChild(li);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectInstallMenuItem);
  } else {
    injectInstallMenuItem();
  }
})();
