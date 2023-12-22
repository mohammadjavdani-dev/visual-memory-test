import type { Metadata } from 'next';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

import './globals.css';
import ThemeRegistry from '@/theme/registry';

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa-IR" dir='rtl'>
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <>
            {children}
            <ToastContainer
              position="top-center"
            />
          </>
        </ThemeRegistry>
      </body>
    </html>
  )
}