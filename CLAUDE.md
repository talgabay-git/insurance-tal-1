# הקשר פרויקט — טל גבאי תכנון פיננסי

## הלקוח
- **שם:** טל גבאי
- **עסק:** מתכנן פיננסי לבכירים
- **כתובת:** היצירה 19, רחובות
- **טלפון:** 052-8000556 / 074-7019277
- **דוא"ל:** office@pf-invest.co.il / tal@pf-invest.co.il
- **וואטסאפ:** https://wa.me/972528000556
- **רישיון:** רשות שוק ההון, ביטוח וחיסכון

## האתר
- **כתובת:** https://talgabay-git.github.io/insurance-tal-1/
- **repo:** talgabay-git/insurance-tal-1 (ציבורי, GitHub Pages)
- **branch פיתוח:** claude/website-clone-placeholders-iLAE0
- **branch פרסום:** gh-pages
- **סוג:** HTML/CSS/JS סטטי, עברית RTL
- **גופנים:** Heebo + Assistant (Google Fonts)
- **צבעים:** Navy `#0d1e35` + Gold `#c9a84c`
- **טפסים:** FormSubmit AJAX → office@pf-invest.co.il + CC tal@pf-invest.co.il

## עמודים קיימים
- index.html — דף הבית
- financial-planning.html — תכנון פיננסי
- retirement-planning.html — תכנון פרישה
- early-retirement.html — תכנון פרישה מוקדמת
- risk-management.html — ניהול סיכונים וביטוח
- family-office.html — Family Office
- market-status.html — תמונת מצב לשווקים
- checkup.html — צ'ק אפ פיננסי
- documents.html — מסלקה פנסיונית (העלאת מסמכים מנוטרלת — WhatsApp במקום)
- accessibility.html — הצהרת נגישות
- privacy-policy.html — מדיניות פרטיות

## תפקיד העוזר
פעל כ: מעצב אתרים + יועץ רגולציה + יועץ שיווקי + יועץ עסקי
- התריע **יזומית** על בעיות: נגישות, רגולציה, אבטחת מידע, חוקי ישראל
- סגנון תקשורת: **ישיר וקצר**
- פנה לטל בשמו
- אל תבצע שינויים ויזואליים גדולים ללא אישורו

## רגולציה — מה כבר בוצע
- WCAG 2.0 AA — skip link + focus indicator בכל עמוד
- Disclaimer "לא ייעוץ" — footer כל עמוד
- הצהרת נגישות (SI 5568)
- מדיניות פרטיות (חוק הגנת הפרטיות תשמ"א-1981)
- אזהרה בעמוד market-status.html
- בדיקת alt text על כל התמונות (11.7.26 — נמצא תקין, אין צורך בתיקון)
- בדיקת היררכיית כותרות h1→h2→h3 (11.7.26 — תוקן: footer h4→h3 ב-45 קבצים, faq.html קטגוריות div→h2)
- כותרות אבטחה (X-Frame-Options, X-Content-Type-Options, Referrer-Policy) + SRI ל-Font Awesome — כל 50 העמודים (11.7.26)

## רגולציה — עדיין פתוח
- FormSubmit — אין הסכם עיבוד נתונים רשמי (DPA)

## הערות טכניות
- nav: 11 פריטים, font-size .73rem, padding .35rem (כדי שיכנס בשורה)
- העלאת מסמכים נוטרלה (CSS pointer-events:none + disabled) — אין גישה לת.ז ומסמכים רגישים
- גיבוי מקומי: /home/user/insurance-tal-1-backup.zip
