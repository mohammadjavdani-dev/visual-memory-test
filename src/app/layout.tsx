import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'آزمون حافظه دیداری',
  description: 'پلتفرم ارزیابی آزمون حافظه دیداری',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa-IR" dir='rtl'>
      <body>{children}</body>
    </html>
  )
}
