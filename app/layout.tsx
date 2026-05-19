import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_NAME = 'Daichi Hotta';
const SITE_DESCRIPTION =
  '青山学院大学でコンピュータグラフィックスを研究する Daichi Hotta のポートフォリオサイト。物理シミュレーション・HPC・低レイヤー技術に関心があります。';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Portfolio`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Daichi Hotta',
    '堀田大智',
    'ポートフォリオ',
    'Portfolio',
    'Computer Graphics',
    'Physics Simulation',
    'Next.js',
    'TypeScript',
    'C++',
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    title: `${SITE_NAME} | Portfolio`,
    description: SITE_DESCRIPTION,
    siteName: `${SITE_NAME} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Portfolio`,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
