(function () {
  var INDEX = [
    { t: 'דף הבית', u: 'index.html', d: 'ליווי אישי וממוקד לבכירים', k: 'טל גבאי תכנון פיננסי בכירים ליווי אישי יועץ עצמאי' },
    { t: 'תכנון פיננסי', u: 'financial-planning.html', d: 'תכנון פיננסי מקיף לבכירים', k: 'תכנון פיננסי חיסכון מס השקעות הכנסה הוצאות תקציב' },
    { t: 'תכנון פרישה', u: 'retirement-planning.html', d: 'תכנון מקיף לגיל הפרישה', k: 'פרישה גיל 67 קצבה פנסיה תכנון פרישה הכנסה בפרישה' },
    { t: 'תכנון פרישה מוקדמת', u: 'early-retirement.html', d: 'תכנון לפרישה לפני גיל 67', k: 'פרישה מוקדמת גיל 55 60 62 עצמאות כלכלית' },
    { t: 'Family Office', u: 'family-office.html', d: 'ניהול עושר משפחתי מקיף', k: 'family office ניהול עושר משפחתי נכסים הון פמילי אופיס' },
    { t: 'תמונת מצב בשווקים', u: 'market-status.html', d: 'עדכון שוטף על מצב השווקים', k: 'שוק הון מניות אג"ח תשואה ריבית מדד S&P דאו ת"א' },
    { t: 'צ\'ק אפ הוליסטי', u: 'holistic-checkup.html', d: 'בדיקה מקיפה של המצב הפיננסי', k: 'צ\'ק אפ בדיקה פיננסית ביקורת פנסיה ביטוח ניהול' },
    { t: 'מסלקה פנסיונית', u: 'documents.html', d: 'שירות מסלקה פנסיונית', k: 'מסלקה פנסיונית מסמכים פנסיה קופות גמל העברה' },
    { t: 'שאלות ותשובות', u: 'faq.html', d: 'תשובות לשאלות הנפוצות ביותר', k: 'שאלות תשובות FAQ פנסיה ביטוח גמל קרן השתלמות פרישה' },
    { t: 'פעולות נפוצות', u: 'common-actions.html', d: 'ביצוע פעולות שוטפות בקופות', k: 'שינוי מסלול משיכת כספים הלוואה דיגיטלית מוטבים עדכון פרטים הפקדה' },
    { t: 'קרן פנסיה', u: 'pension-fund.html', d: 'החיסכון הפנסיוני המרכזי של שכירים ועצמאים', k: 'קרן פנסיה אובדן כושר עבודה שאירים נכות צבירה מקדם המרה כיסוי ביטוחי אגרות חוב מיועדות מסלול השקעה גירעון עודף אקטוארי' },
    { t: 'מטריה ביטוחית', u: 'matria-bituchit.html', d: 'שכבת ביטוח משלימה מעל לקרן הפנסיה', k: 'מטריה ביטוחית ביטוח פרטי כיסוי אכשרה עיסוק ספציפי קיזוז גורם ממשלתי צווארון לבן אובדן כושר עבודה' },
    { t: 'ביטוח מנהלים', u: 'managers-insurance.html', d: 'חוזה ביטוח וחיסכון אישי', k: 'ביטוח מנהלים מקדם המרה חוזה אישי ניוד פוליסה ישנה כיסוי ביטוחי' },
    { t: 'קופת גמל 190', u: 'gemel-190.html', d: 'קופת גמל לפרישה — קצבה פטורה ממס', k: 'קופת גמל 190 קצבה פרישה חיסכון פטור ממס סעיף 190' },
    { t: 'קופת גמל להשקעה', u: 'gemel-hashkaa.html', d: 'חיסכון נזיל לכל מטרה', k: 'קופת גמל להשקעה נזילה מס רווחי הון פרישה קצבה חיסכון' },
    { t: 'קרן השתלמות', u: 'keren-hishtalmut.html', d: 'חיסכון פטור ממס ייחודי לשכירים ועצמאים', k: 'קרן השתלמות שכיר עצמאי פטור ממס תקרה 6 שנים נזיל' },
    { t: 'פוליסות חיסכון', u: 'savings-policies.html', d: 'חיסכון גמיש דרך חברת ביטוח', k: 'פוליסות חיסכון ביטוח גמיש נזיל מסלול השקעה' },
    { t: 'תיקי השקעות מנוהלים', u: 'managed-portfolios.html', d: 'ניהול מקצועי של תיק ההשקעות האישי', k: 'תיק השקעות מנוהל ניהול תיקים מניות אגרות חוב' },
    { t: 'מוצרים מובנים (סטרקצ\'רים)', u: 'structured-products.html', d: 'מוצרי השקעה עם הגנה על הקרן', k: 'מוצרים מובנים סטרקצ\'ר הגנה על קרן תשואה' },
    { t: 'קרנות נאמנות וקרנות סל (ETF)', u: 'mutual-funds-etf.html', d: 'השקעה מגוונת בקרנות', k: 'קרנות נאמנות קרנות סל ETF מדד מניות' },
    { t: 'השקעות אלטרנטיביות', u: 'alternative-investments.html', d: 'השקעות מחוץ לשוקי ההון הסחירים', k: 'השקעות אלטרנטיביות נדל"ן פרטי קרנות גידור' },
    { t: 'ייעוץ משכנתא', u: 'mortgage-advice.html', d: 'ייעוץ מקצועי לנטילת משכנתא', k: 'משכנתא ריבית מסלול הלוואה נדל"ן רכישת דירה' },
    { t: 'החזר מס', u: 'tax-refund.html', d: 'קבלת החזרי מס', k: 'החזר מס מס הכנסה זיכוי ניכוי פנסיה' },
    { t: 'צוואות וירושות', u: 'wills-inheritance.html', d: 'תכנון עיזבון וצוואה', k: 'צוואה ירושה עיזבון נכסים העברת עושר' },
    { t: 'ביטוח אלמנטרי', u: 'elementary-insurance.html', d: 'ביטוחי רכוש ואלמנטרי', k: 'ביטוח אלמנטרי רכוש דירה רכב' },
    { t: 'קופת גמל / פרובידנט', u: 'provident-fund.html', d: 'קופת גמל לחיסכון', k: 'קופת גמל פרובידנט חיסכון' },
    { t: 'תיק השקעות', u: 'investment-portfolio.html', d: 'ניהול תיק השקעות', k: 'תיק השקעות מניות אגרות חוב השקעה' },
    { t: 'העברת הון וניוד', u: 'capital-transfer.html', d: 'ניוד והעברת כספים בין קופות', k: 'העברת הון ניוד כספים העברה בין קופות' },
  ];

  function doSearch(query) {
    if (!query || query.trim().length < 2) return [];
    var words = query.trim().toLowerCase().split(/\s+/);
    var scored = [];
    for (var i = 0; i < INDEX.length; i++) {
      var item = INDEX[i];
      var hay = (item.t + ' ' + item.k + ' ' + item.d).toLowerCase();
      var score = 0;
      for (var j = 0; j < words.length; j++) {
        if (hay.indexOf(words[j]) !== -1) score++;
      }
      if (score > 0) scored.push({ score: score, item: item });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, 8).map(function (x) { return x.item; });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var toggle  = document.getElementById('search-toggle');
    var overlay = document.getElementById('search-overlay');
    var inp     = document.getElementById('search-input');
    var closeBtn= document.getElementById('search-close');
    var list    = document.getElementById('search-results');
    if (!toggle || !overlay || !inp) return;

    var autoCloseTimer = null;
    var isOverOverlay  = false;

    function scheduleClose() {
      clearTimeout(autoCloseTimer);
      autoCloseTimer = setTimeout(function () {
        if (!isOverOverlay && document.activeElement !== inp) {
          closeSearch();
        }
      }, 3000);
    }

    function openSearch() {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      inp.focus();
      scheduleClose();
    }
    function closeSearch() {
      clearTimeout(autoCloseTimer);
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      inp.value = '';
      list.innerHTML = '';
      isOverOverlay = false;
    }

    toggle.addEventListener('click', function () {
      overlay.classList.contains('open') ? closeSearch() : openSearch();
    });
    toggle.addEventListener('mouseenter', function () {
      if (!overlay.classList.contains('open')) openSearch();
      else { clearTimeout(autoCloseTimer); scheduleClose(); }
    });

    overlay.addEventListener('mouseenter', function () {
      isOverOverlay = true;
      clearTimeout(autoCloseTimer);
    });
    overlay.addEventListener('mouseleave', function () {
      isOverOverlay = false;
      if (document.activeElement !== inp) scheduleClose();
    });

    inp.addEventListener('focus', function () { clearTimeout(autoCloseTimer); });
    inp.addEventListener('blur',  function () {
      if (!isOverOverlay) scheduleClose();
    });

    closeBtn.addEventListener('click', closeSearch);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSearch(); });
    document.addEventListener('click', function (e) {
      if (overlay.classList.contains('open') && !overlay.contains(e.target) && !toggle.contains(e.target)) closeSearch();
    });

    inp.addEventListener('input', function () {
      var q = this.value;
      var hits = doSearch(q);
      if (!hits.length) {
        list.innerHTML = q.trim().length >= 2 ? '<li class="search-no-results">לא נמצאו תוצאות</li>' : '';
        return;
      }
      list.innerHTML = hits.map(function (h) {
        return '<li><a href="' + h.u + '" class="search-result-link"><span class="search-result-title">' + h.t + '</span><span class="search-result-desc">' + h.d + '</span></a></li>';
      }).join('');
    });
  });
})();
