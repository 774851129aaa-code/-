# استخدام خادم Nginx الخفيف كأسهل وأسرع طريقة لرفع صفحات الويب
FROM nginx:alpine

# نسخ ملفات مشروعك الحالية إلى مجلد النشر الخاص بـ Nginx
COPY . /usr/share/nginx/html

# فتح المنفذ 80 للاستماع للطلبات
EXPOSE 80

# تشغيل خادم Nginx
CMD ["nginx", -g, "daemon off;"]
