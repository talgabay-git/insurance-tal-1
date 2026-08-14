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
    close: 'הבנתי',
    bannerText: 'קבלו גישה מהירה יותר - התקינו את האתר כאפליקציה',
    bannerTextCalc: 'שמרו את החישוב לפעם הבאה - התקינו את האתר כאפליקציה',
    bannerInstall: 'התקינו',
    bannerDismiss: 'סגור',
    footerBanner: 'להתקנת האתר כאפליקציה בנייד שלך - גישה מהירה בלחיצה אחת מהנייד',
    footerBtn: 'להתקנה עכשיו'
  } : {
    menu: 'Install this site as an app',
    title: 'Install this site as an app',
    iosStep1: "Tap the Share button in Safari's toolbar",
    iosStep2: 'Scroll down and choose "Add to Home Screen"',
    generic: 'Open your browser menu and choose "Install app" or "Add to Home Screen"',
    close: 'Got it',
    bannerText: 'Get faster access - install this site as an app',
    bannerTextCalc: 'Save this calculation for next time - install the app',
    bannerInstall: 'Install',
    bannerDismiss: 'Dismiss',
    footerBanner: 'Install this site as an app on your phone - one-tap access',
    footerBtn: 'Install now'
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

  function injectFooterInstallBanner() {
    if (isStandalone) return;
    var anchor = document.querySelector('.footer-top-inner');
    if (!anchor || document.getElementById('pwa-footer-banner')) return;
    var card = document.createElement('div');
    card.id = 'pwa-footer-banner';
    card.style.cssText = 'max-width:900px;margin:0 auto 2rem;background:rgba(201,168,76,.08);border:1.5px solid rgba(201,168,76,.5);border-radius:14px;padding:1.3rem 1.6rem;text-align:center;';
    card.innerHTML =
      '<i class="fa-solid fa-mobile-screen-button" aria-hidden="true" style="font-size:1.6rem;color:#c9a84c;margin-bottom:.5rem;display:block;"></i>' +
      '<p style="color:#fff;font-size:.92rem;font-weight:700;margin:0 0 .85rem;line-height:1.55;">' + t.footerBanner + '</p>' +
      '<button type="button" id="pwa-footer-banner-btn" style="background:#c9a84c;color:#0d1e35;border:none;border-radius:8px;padding:.65rem 1.8rem;font-size:.85rem;font-weight:800;cursor:pointer;">' + t.footerBtn + '</button>';
    anchor.insertAdjacentElement('afterend', card);
    document.getElementById('pwa-footer-banner-btn').addEventListener('click', handleInstallClick);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectInstallMenuItem);
    document.addEventListener('DOMContentLoaded', injectFooterInstallBanner);
  } else {
    injectInstallMenuItem();
    injectFooterInstallBanner();
  }

  /* ---- באנר תחתון להתקנת האפליקציה - מופיע פעם אחת בלבד לפי מעורבות, או מיד אחרי חישוב במחשבון ---- */
  var BANNER_DISMISS_KEY = 'pwaBannerDismissed';
  var BANNER_SHOWN_KEY = 'pwaBannerShownSession';
  var bannerShown = false;

  function showInstallBanner(reason) {
    if (isStandalone || bannerShown) return;
    if (!window.matchMedia('(max-width: 768px)').matches) return;
    try { if (localStorage.getItem(BANNER_DISMISS_KEY) === '1') return; } catch (e) {}
    try {
      if (sessionStorage.getItem(BANNER_SHOWN_KEY) === '1') return;
      sessionStorage.setItem(BANNER_SHOWN_KEY, '1');
    } catch (e) {}
    bannerShown = true;

    var msg = reason === 'calc' ? t.bannerTextCalc : t.bannerText;
    var bar = document.createElement('div');
    bar.id = 'pwa-install-banner';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', t.title);
    bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:9500;background:#0d1e35;color:#fff;display:flex;align-items:center;gap:.6rem;padding:.7rem .9rem;box-shadow:0 -4px 18px rgba(0,0,0,.25);font-family:inherit;direction:' + (isHe ? 'rtl' : 'ltr') + ';animation:pwaBannerIn .35s ease-out;';
    bar.innerHTML =
      '<i class="fa-solid fa-mobile-screen-button" aria-hidden="true" style="font-size:1.3rem;color:#c9a84c;flex-shrink:0;"></i>' +
      '<span style="flex:1;font-size:.82rem;line-height:1.4;">' + msg + '</span>' +
      '<button type="button" id="pwa-banner-install" style="background:#c9a84c;color:#0d1e35;border:none;border-radius:8px;padding:.45rem 1rem;font-size:.8rem;font-weight:700;cursor:pointer;white-space:nowrap;">' + t.bannerInstall + '</button>' +
      '<button type="button" id="pwa-banner-close" aria-label="' + t.bannerDismiss + '" style="background:none;border:none;color:rgba(255,255,255,.6);font-size:1.1rem;cursor:pointer;padding:.2rem;line-height:1;">&times;</button>';
    document.body.appendChild(bar);
    document.body.classList.add('pwa-banner-open');
    document.documentElement.style.setProperty('--pwa-banner-h', bar.offsetHeight + 'px');

    function removeBanner() {
      bar.remove();
      document.body.classList.remove('pwa-banner-open');
      document.documentElement.style.setProperty('--pwa-banner-h', '0px');
    }
    document.getElementById('pwa-banner-close').addEventListener('click', function () {
      try { localStorage.setItem(BANNER_DISMISS_KEY, '1'); } catch (e) {}
      removeBanner();
    });
    document.getElementById('pwa-banner-install').addEventListener('click', function (e) {
      handleInstallClick(e);
      removeBanner();
    });
  }

  window.pwaInstallBanner = { showNow: showInstallBanner };

  function armEngagementBanner() {
    if (isStandalone || !window.matchMedia('(max-width: 768px)').matches) return;
    setTimeout(function () { showInstallBanner('engagement'); }, 30000);
    try {
      var views = parseInt(sessionStorage.getItem('pwaPageViews') || '0', 10) + 1;
      sessionStorage.setItem('pwaPageViews', String(views));
      if (views >= 2) showInstallBanner('engagement');
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', armEngagementBanner);
  } else {
    armEngagementBanner();
  }
})();
