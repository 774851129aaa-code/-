const express = require('express');
const app = express();

// إعداد الوسيط لقراءة البيانات المرسلة من النماذج (Forms)
app.use(express.urlencoded({ extended: true }));

// قاعدة بيانات وهمية (مصفوفة) لحفظ الأخبار مؤقتاً
// في المشاريع الحقيقية على Render، استبدل هذا بـ PostgreSQL أو MongoDB
let newsList = [
    { id: 1, title: 'مرحباً بك في موقعك', content: 'هذا خبر تجريبي تم إضافته برمجياً.' }
];

// كلمة مرور بسيطة لحماية لوحة التحكم
const ADMIN_PASSWORD = "123";

// ==========================================
// 1. مسار الزوار: الصفحة الرئيسية لعرض الأخبار
// ==========================================
app.get('/', (req, res) => {
    let newsHtml = newsList.map(news => `
        <div class="news-card">
            <h3>${news.title}</h3>
            <p>${news.content}</p>
        </div>
    `).join('');

    res.send(`
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <title>موقعي الإخباري</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 20px; }
                .header { text-align: center; background-color: #007bff; color: white; padding: 15px; border-radius: 8px; }
                .news-container { max-width: 800px; margin: 20px auto; }
                .news-card { background: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                .admin-link { display: block; text-align: center; margin-top: 20px; color: #555; }
            </style>
        </head>
        <body>
            <div class="news-container">
                <div class="header">
                    <h1>الأخبار العاجلة</h1>
                </div>
                ${newsHtml || '<p style="text-align:center;">لا توجد أخبار حالياً.</p>'}
                <a href="/admin" class="admin-link">الدخول للوحة التحكم</a>
            </div>
        </body>
        </html>
    `);
});

// ==========================================
// 2. مسار لوحة التحكم: عرض النماذج والأخبار للإدارة
// ==========================================
app.get('/admin', (req, res) => {
    let adminNewsHtml = newsList.map(news => `
        <div class="admin-card">
            <h4>${news.title}</h4>
            <form action="/admin/delete/${news.id}" method="POST" style="display:inline;">
                <input type="hidden" name="password" placeholder="أدخل الرقم السري للحذف" required style="width: 150px; padding: 5px;">
                <button type="submit" class="btn-delete">حذف الخبر</button>
            </form>
        </div>
    `).join('');

    res.send(`
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <title>لوحة التحكم</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #333; color: white; padding: 20px; }
                .dashboard { max-width: 800px; margin: 0 auto; background: #444; padding: 20px; border-radius: 8px; }
                input, textarea { width: 100%; padding: 10px; margin: 10px 0; box-sizing: border-box; border-radius: 4px; border: none; }
                button { background-color: #28a745; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
                .btn-delete { background-color: #dc3545; padding: 5px 10px; }
                .admin-card { background: #555; padding: 15px; margin-bottom: 10px; border-radius: 4px; }
                a { color: #17a2b8; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class="dashboard">
                <h2>لوحة التحكم الإدارية</h2>
                <a href="/">← العودة للموقع</a>
                <hr>
                
                <h3>إضافة خبر جديد</h3>
                <form action="/admin/add" method="POST">
                    <input type="password" name="password" placeholder="كلمة مرور الأدمن (123)" required>
                    <input type="text" name="title" placeholder="عنوان الخبر" required>
                    <textarea name="content" placeholder="تفاصيل الخبر..." rows="4" required></textarea>
                    <button type="submit">نشر الخبر</button>
                </form>

                <hr>
                <h3>إدارة الأخبار الحالية</h3>
                ${adminNewsHtml || '<p>لا توجد أخبار لإدارتها.</p>'}
            </div>
        </body>
        </html>
    `);
});

// ==========================================
// 3. مسار معالجة الإضافة (تأمين بكلمة المرور)
// ==========================================
app.post('/admin/add', (req, res) => {
    const { password, title, content } = req.body;

    if (password !== ADMIN_PASSWORD) {
        return res.send('<h3>كلمة المرور خاطئة! <a href="/admin">العودة</a></h3>');
    }

    // إضافة الخبر للمصفوفة
    newsList.push({ 
        id: Date.now(), // توليد ID عشوائي بناءً على الوقت
        title: title, 
        content: content 
    });

    res.redirect('/admin'); // العودة للوحة التحكم بعد النشر
});

// ==========================================
// 4. مسار معالجة الحذف (تأمين بكلمة المرور)
// ==========================================
app.post('/admin/delete/:id', (req, res) => {
    const { password } = req.body;
    const newsId = parseInt(req.params.id);

    if (password !== ADMIN_PASSWORD) {
        return res.send('<h3>كلمة المرور خاطئة! <a href="/admin">العودة</a></h3>');
    }

    // تصفية المصفوفة وحذف الخبر المطابق للـ ID
    newsList = newsList.filter(news => news.id !== newsId);

    res.redirect('/admin'); // العودة للوحة التحكم بعد الحذف
});

// ==========================================
// تشغيل السيرفر
// ==========================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`السيرفر يعمل بنجاح على الرابط: http://localhost:${PORT}`);
});
