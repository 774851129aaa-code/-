const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// قاعدة بيانات وهمية تحتوي على خبر جاهز كمثال (مع رابط صورة واسم ناشر)
let newsList = [
    { 
        id: 1, 
        title: 'إطلاق النسخة التجريبية للمنصة الإخبارية الجديدة', 
        content: 'تم بحمد الله إطلاق المنصة الإخبارية المتكاملة لتغطية كافة الأحداث أولاً بأول وبكل شفافية واحترافية.', 
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop',
        publisher: 'فريق الإدارة'
    }
];

const ADMIN_PASSWORD = "123";

// ==========================================
// 1. الصفحة الرئيسية (تصميم إخباري واقعي)
// ==========================================
app.get('/', (req, res) => {
    let newsHtml = newsList.map(news => `
        <article class="news-card">
            <img src="${news.image}" alt="صورة الخبر" class="news-img" onerror="this.src='https://via.placeholder.com/600x350?text=News+Image'">
            <div class="news-content">
                <div class="news-meta">
                    <span>✍️ بواسطة: <strong>${news.publisher}</strong></span>
                </div>
                <h2>${news.title}</h2>
                <p>${news.content}</p>
            </div>
        </article>
    `).join('');

    res.send(`
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>شبكة الحدث الإخبارية</title>
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                body { background-color: #f4f6f9; color: #333; line-height: 1.6; }
                header { background: #1a202c; color: white; padding: 20px 0; text-align: center; border-bottom: 4px solid #3182ce; }
                header h1 { font-size: 26px; }
                .container { max-width: 900px; margin: 30px auto; padding: 0 15px; }
                .news-grid { display: grid; gap: 20px; }
                .news-card { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: transform 0.2s; }
                .news-card:hover { transform: translateY(-3px); }
                .news-img { width: 100%; height: 250px; object-fit: cover; }
                .news-content { padding: 20px; }
                .news-meta { font-size: 13px; color: #718096; margin-bottom: 10px; }
                .news-content h2 { font-size: 20px; color: #2d3748; margin-bottom: 10px; }
                .news-content p { color: #4a5568; font-size: 15px; }
                .admin-btn { display: block; text-align: center; margin: 40px 0; color: #3182ce; text-decoration: none; font-weight: bold; }
                .admin-btn:hover { text-decoration: underline; }
                .no-news { text-align: center; color: #718096; padding: 40px; font-size: 18px; }
            </style>
        </head>
        <body>
            <header>
                <h1>📰 شبكة الحدث الإخبارية</h1>
            </header>
            <div class="container">
                <div class="news-grid">
                    ${newsHtml || '<div class="no-news">لا توجد أخبار منشورة حالياً.</div>'}
                </div>
                <a href="/admin" class="admin-btn">⚙️ الدخول إلى لوحة التحكم الإدارية</a>
            </div>
        </body>
        </html>
    `);
});

// ==========================================
// 2. لوحة التحكم (إضافة وحذف الأخبار مع اسم الناشر والصورة)
// ==========================================
app.get('/admin', (req, res) => {
    let adminNewsHtml = newsList.map(news => `
        <div class="admin-card">
            <div class="admin-info">
                <strong>${news.title}</strong>
                <small>الناشر: ${news.publisher}</small>
            </div>
            <form action="/admin/delete/${news.id}" method="POST" onsubmit="return confirm('هل أنت متأكد من الحذف؟');">
                <input type="password" name="password" placeholder="كلمة السر" required style="padding: 5px; width: 90px; border-radius: 4px; border: 1px solid #ccc;">
                <button type="submit" class="btn-delete">حذف</button>
            </form>
        </div>
    `).join('');

    res.send(`
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>لوحة التحكم الإدارية</title>
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                body { background-color: #1a202c; color: white; padding: 20px; }
                .dashboard { max-width: 800px; margin: 30px auto; background: #2d3748; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
                h2, h3 { margin-bottom: 20px; border-bottom: 2px solid #4a5568; padding-bottom: 10px; }
                label { display: block; margin-top: 15px; margin-bottom: 5px; color: #cbd5e0; font-size: 14px; }
                input, textarea { width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #4a5568; background: #1a202c; color: white; font-size: 15px; }
                textarea { resize: vertical; height: 120px; }
                button { background-color: #3182ce; color: white; padding: 12px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; margin-top: 20px; width: 100%; font-weight: bold; transition: background 0.2s; }
                button:hover { background-color: #2b6cb0; }
                .btn-delete { background-color: #e53e3e; width: auto; padding: 5px 12px; margin-top: 0; font-size: 14px; }
                .btn-delete:hover { background-color: #c53030; }
                .admin-card { background: #1a202c; padding: 15px; margin-bottom: 12px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; border-right: 4px solid #3182ce; }
                .admin-info { display: flex; flex-direction: column; gap: 4px; }
                .admin-info small { color: #a0aec0; }
                .back-link { color: #63b3ed; text-decoration: none; display: inline-block; margin-bottom: 20px; }
                .back-link:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <div class="dashboard">
                <a href="/" class="back-link">← العودة للموقع الرئيسي</a>
                <h2>لوحة التحكم - إدارة الأخبار</h2>
                
                <h3>نشر خبر جديد</h3>
                <form action="/admin/add" method="POST">
                    <label>كلمة المرور الخاصة بالإدارة (123):</label>
                    <input type="password" name="password" placeholder="أدخل كلمة المرور" required>
                    
                    <label>عنوان الخبر:</label>
                    <input type="text" name="title" placeholder="أدخل عنواناً واضحاً للخبر" required>
                    
                    <label>اسم الناشر (الصحفي / الكاتب):</label>
                    <input type="text" name="publisher" placeholder="مثال: أحمد محمد" required>
                    
                    <label>رابط الصورة (URL):</label>
                    <input type="url" name="image" placeholder="ضع رابط صورة واقعية هنا (مثل رابط من Unsplash)" required>
                    
                    <label>تفاصيل الخبر:</label>
                    <textarea name="content" placeholder="اكتب نص الخبر بالتفصيل..." required></textarea>
                    
                    <button type="submit">نشر الخبر الآن</button>
                </form>

                <hr style="border: 0; border-top: 1px solid #4a5568; margin: 30px 0;">
                
                <h3>الأخبار الحالية (${newsList.length})</h3>
                ${adminNewsHtml || '<p style="color:#a0aec0;">لا توجد أخبار حالياً.</p>'}
            </div>
        </body>
        </html>
    `);
});

// ==========================================
// 3. معالجة إضافة الخبر
// ==========================================
app.post('/admin/add', (req, res) => {
    const { password, title, content, image, publisher } = req.body;

    if (password !== ADMIN_PASSWORD) {
        return res.send('<h3 style="text-align:center; margin-top:50px; font-family:sans-serif;">❌ كلمة المرور خاطئة! <a href="/admin">العودة</a></h3>');
    }

    newsList.unshift({ // يضيف الخبر الجديد في البداية ليكون أحدث خبر
        id: Date.now(), 
        title, 
        content, 
        image, 
        publisher 
    });

    res.redirect('/');
});

// ==========================================
// 4. معالجة حذف الخبر
// ==========================================
app.post('/admin/delete/:id', (req, res) => {
    const { password } = req.body;
    const newsId = parseInt(req.params.id);

    if (password !== ADMIN_PASSWORD) {
        return res.send('<h3 style="text-align:center; margin-top:50px; font-family:sans-serif;">❌ كلمة المرور خاطئة! <a href="/admin">العودة</a></h3>');
    }

    newsList = newsList.filter(news => news.id !== newsId);
    res.redirect('/admin');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
