import { languages } from '@/app/i18n/settings';
import { Header } from '@/components/shared';
import { dir } from 'i18next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trainers',
  description: 'Trainers will help you to get in a better shape',
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Header lng={lng} />
        {children}
      </body>
    </html>
  );
}
