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

## רגולציה — עדיין פתוח
- בדיקת alt text על כל התמונות
- בדיקת היררכיית כותרות (h1→h2→h3)
- FormSubmit — אין הסכם עיבוד נתונים רשמי (DPA)

## הערות טכניות
- nav: 11 פריטים, font-size .73rem, padding .35rem (כדי שיכנס בשורה)
- העלאת מסמכים נוטרלה (CSS pointer-events:none + disabled) — אין גישה לת.ז ומסמכים רגישים
- גיבוי מקומי: /home/user/insurance-tal-1-backup.zip
- יש גרסה אנגלית: en/index.html (מקביל ל-index.html)

## היסטוריית עבודה

### 21.05.2026
- הוספת **סקשן המלצות מוואטסאפ** ב-index.html + en/index.html (screenshots מלקוחות)
- הוספת **admin.html** — עמוד ניהול עצמי להוספת המלצות חדשות
- יצירת תיקיית whatsapp-screenshots/ לאחסון תמונות

### 15.05.2026
- הוספת **9 המלצות לקוחות** (עברית + אנגלית):
  Santi Ben Naim, Eyal Biran, Ilan Ginosar, Dr. Uri Brener, Yaakov Avishar,
  Shahar Rivel, Yuval Peled, Michael Weiner, Yair Ram,
  Varda & Yaakov Nagranu, עו"ד אסף פריאל
- הפחתת אטימות overlay בסקשן "אודות" (0.72 → 0.54)

### 02.05.2026
- אנימציית blink זהב על טקסט "הוליסטי" (5s)
- אנימציית auto-cycle על stats bar
- שינויי כותרות עברית/אנגלית
- הסרת badges ממספרים בכרטיסי יועצים
