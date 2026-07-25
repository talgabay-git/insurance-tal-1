/* מוסיף נתיב ניווט (breadcrumb) והדגשת המילה האחרונה בזהב לכותרות עמודים פנימיים
   פועל על .page-hero / .calc-hero / .checkup-hero / .docs-hero - לא נוגע בדף הבית (.hero) */
(function(){
  var heroes = document.querySelectorAll('.page-hero, .calc-hero, .checkup-hero, .docs-hero');
  heroes.forEach(function(hero){
    var h1 = hero.querySelector('h1');
    if (!h1) return;

    var plainTitle = h1.textContent.trim().replace(/\s+/g, ' ');

    if (plainTitle && !hero.querySelector('.hero-breadcrumb')) {
      var bc = document.createElement('div');
      bc.className = 'hero-breadcrumb';
      bc.innerHTML = '<a href="index.html">ראשי</a> <span aria-hidden="true">⟵</span> ' + plainTitle;
      h1.parentNode.insertBefore(bc, h1);
    }

    if (!h1.querySelector('.hero-accent')) {
      // מוצא את צומת הטקסט האחרון עם תוכן ממשי בכל עץ ה-h1, לא רק בילדים ישירים
      // (מטפל גם במקרה שכל הכותרת עטופה ב-span פנימי, למשל <span lang="en">)
      var walker = document.createTreeWalker(h1, NodeFilter.SHOW_TEXT, null);
      var lastTextNode = null, n;
      while ((n = walker.nextNode())) { if (n.textContent.trim()) lastTextNode = n; }

      if (lastTextNode) {
        var text = lastTextNode.textContent;
        var trimmed = text.replace(/\s+$/, '');
        var trailingSpace = text.slice(trimmed.length);
        var lastSpaceIdx = trimmed.lastIndexOf(' ');
        var before = lastSpaceIdx === -1 ? '' : trimmed.slice(0, lastSpaceIdx + 1);
        var lastWord = lastSpaceIdx === -1 ? trimmed : trimmed.slice(lastSpaceIdx + 1);
        if (lastWord) {
          var span = document.createElement('span');
          span.className = 'hero-accent';
          span.textContent = lastWord;
          var frag = document.createDocumentFragment();
          if (before) frag.appendChild(document.createTextNode(before));
          frag.appendChild(span);
          if (trailingSpace) frag.appendChild(document.createTextNode(trailingSpace));
          lastTextNode.parentNode.replaceChild(frag, lastTextNode);
        }
      }
    }
  });
})();
