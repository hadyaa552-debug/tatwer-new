import './globals.css'

export const metadata = {
  title: 'IL Monte Galala المونت جلالة - تطوير مصر | أبراج فندقية فاخرة على البحر الأحمر',
  description: 'IL Monte Galala - أول مشروع من نوعه على البحر الأحمر: 10 أبراج سكنية فندقية فاخرة بإدارة Marriott في جبل الجلالة. مقدم 5% وتقسيط 10 سنوات.',
  keywords: ['المونت جلالة', 'IL Monte Galala', 'تطوير مصر', 'جبل الجلالة', 'العين السخنة'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
