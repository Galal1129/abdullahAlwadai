# THAWQ Import & Export — Website

موقع شركة THAWQ للاستيراد والتصدير — Next.js 15 + Tailwind CSS 4، ثنائي اللغة (عربي RTL / إنجليزي LTR).

## التشغيل

```bash
npm install        # أول مرة فقط
npm run dev        # تشغيل بيئة التطوير على http://localhost:3000
npm run build      # بناء نسخة الإنتاج
npm start          # تشغيل نسخة الإنتاج
```

الرابط `/` يحوّل تلقائياً إلى `/ar`. النسخة الإنجليزية على `/en`.

## هيكل المشروع

| المسار | الوصف |
|---|---|
| `app/[locale]/` | صفحات الموقع (الرئيسية، من نحن، الخدمات، المنتجات، الدول، اطلب منتجاً، المدونة، تواصل معنا) |
| `lib/dictionaries/ar.ts` | **كل النصوص العربية** — عدّل المحتوى من هنا |
| `lib/dictionaries/en.ts` | كل النصوص الإنجليزية |
| `components/` | المكونات المشتركة (Navbar، Footer، الشعار، الأيقونات، النماذج) |
| `app/globals.css` | ألوان الهوية (أخضر زمردي `brand-*`، ذهبي `gold-*`، عاجي `ivory-*`) |

## استبدال الشعار الحقيقي

الشعار الحالي رسم SVG تقريبي في `components/Logo.tsx`.
لاستخدام الشعار الأصلي: ضع الملف في `public/logo.png` ثم استبدل محتوى
`LogoMark` في `components/Logo.tsx` بـ:

```tsx
<img src="/logo.png" alt="THAWQ" className={className} />
```

وكذلك أيقونة المتصفح في `app/icon.svg`.

## ربط النماذج (اطلب منتجاً / تواصل معنا)

النموذجان يعرضان رسالة نجاح تجريبية حالياً (لا يوجد إرسال فعلي).
لربطهما ابحث عن تعليق `TODO` في:

- `components/RequestForm.tsx`
- `components/ContactForm.tsx`

خيارات سهلة: [Formspree](https://formspree.io) أو [Web3Forms](https://web3forms.com) أو API Route مع خدمة بريد مثل Resend.

## ملاحظات

- أعلام الدول رموز إيموجي — تظهر كأعلام حقيقية على الجوال وماك، وكرمز الدولة (TR, CN...) على ويندوز.
- الصور الفوتوغرافية من البروتوتايب استُبدلت عمداً بأيقونات وخلفيات متدرجة — يمكن إضافة صور حقيقية لاحقاً داخل `public/`.
