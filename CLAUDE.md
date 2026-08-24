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
- **טפסים:** עברית → Formspree (DPA נשלח, ממתין לחתימה נגדית — ראה "רגולציה"). אנגלית (en/) → עדיין FormSubmit (formsubmit.co), יעבור ל-Formspree אחרי אישור ה-DPA. שניהם → office@pf-invest.co.il + CC tal@pf-invest.co.il

## עמודים קיימים (עודכן 11.7.26 — 39 עמודים)
- index.html — דף הבית
- financial-planning.html — תכנון פיננסי
- retirement-planning.html — תכנון פרישה
- early-retirement.html — תכנון פרישה מוקדמת
- family-office.html — Family Office
- market-status.html — תמונת מצב לשווקים
- checkup.html — צ'ק אפ פיננסי (הוחלף risk-management.html שהוסר בעבר בכוונה)
- holistic-checkup.html — צ'ק אפ הוליסטי
- documents.html — מסלקה פנסיונית (העלאת מסמכים מנוטרלת — WhatsApp במקום)
- mortgage-advice.html — ייעוץ משכנתאות
- tax-refund.html — החזרי מס
- wills-inheritance.html — העברת הון וצוואות
- capital-transfer.html — העברת הון
- alternative-investments.html — השקעות אלטרנטיביות
- investment-portfolio.html — ניהול תיק השקעות
- elementary-insurance.html — ביטוח אלמנטרי
- faq.html — שאלות ותשובות
- common-actions.html — פעולות נפוצות
- calculators.html — מחשבונים פיננסיים (6 מחשבונים)
- pension-fees.html — מחשבון דמי ניהול פנסיה
- pension-fund.html, provident-fund.html, gemel-190.html, gemel-hashkaa.html, keren-hishtalmut.html — מכשירים פנסיוניים
- matria-bituchit.html, managers-insurance.html — ביטוח מנהלים/מטריה ביטוחית
- savings-policies.html, managed-portfolios.html, structured-products.html, mutual-funds-etf.html, hedge-funds.html, rsu-espp-options.html — מכשירי השקעה
- section-125d.html — הטבת מס סעיף 125ד'
- guide-financial-optimization.html — מדריך אופטימיזציה
- admin.html — ניהול עדויות (פנימי)
- accessibility.html — הצהרת נגישות
- privacy-policy.html — מדיניות פרטיות
- 404.html — עמוד שגיאה
- en/ — גרסה אנגלית (11 עמודים מקבילים)

## תזכורת חשובה — דסקטופ מול דפדפן
עדיף לעבוד עם טל דרך גרסת הדסקטופ של Claude Code (המותקנת על המחשב) ולא
דרך גרסת הדפדפן (claude.ai/code). ב-24.8.26 שימוש בדפדפן פעל בטעות על
branch ישן ולא מסונכרן (`claude/wonderful-heisenberg-PyxIv`, לא branch
הפיתוח הרשמי) וגרם לבאג אמיתי באתר החי — ספיר רוזנטל (שהוסרה כבר
מהצוות) חזרה להופיע בעמוד האנגלי, כי הברנץ' ההוא לא הכיל את ההסרה שלה.
אם בכל זאת עובדים דרך הדפדפן, יש לוודא בתחילת השיחה שעובדים על
branch `claude/website-clone-placeholders-iLAE0` ולא branch אחר.

## תפקיד העוזר
פעל כ: מעצב אתרים + יועץ רגולציה + יועץ שיווקי + יועץ עסקי
- התריע **יזומית** על בעיות: נגישות, רגולציה, אבטחת מידע, חוקי ישראל
- סגנון תקשורת: **ישיר וקצר**
- פנה לטל בשמו
- אל תבצע שינויים ויזואליים גדולים ללא אישורו

## הרשאות עבודה קבועות
טל אישר מראש (לראשונה 22.7.26, אושרר שוב 8.8.26 לחודש קדימה - כלומר בתוקף עד כ-8.9.26, יש לבדוק שוב איתו אז):
- `git push` והפצה ל-`gh-pages` (האתר החי) לעבודה שוטפת (תוכן/פיצ'רים/תיקוני באגים) - **בלי לשאול בכל פעם**.

עדיין דורש שאלה מפורשת בכל מקרה:
- מחיקת קבצים
- שינוי עיצובי/מבני גדול (redesign)
- שינוי הגדרות ב-GitHub repo או DNS

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
- FormSubmit — DPA נחתם ע"י טל ונשלח חזרה ל-Formspree ב-8.8.26, ממתין לחתימה נגדית מצדם

## הערות טכניות
- nav: 11 פריטים, font-size .73rem, padding .35rem (כדי שיכנס בשורה)
- העלאת מסמכים נוטרלה (CSS pointer-events:none + disabled) — אין גישה לת.ז ומסמכים רגישים
- גיבוי מקומי: /home/user/insurance-tal-1-backup.zip
