import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '@/theme/registry';

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
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
