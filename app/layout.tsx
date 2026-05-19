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
  'Daichi Hotta のポートフォリオサイト。コンピュータグラフィックス研究室で粒状体の物理シミュレーションを研究しつつ、AI/ML プロダクトのフルスタック開発にも取り組んでいます。';

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
    'Machine Learning',
    'Next.js',
    'TypeScript',
    'C++',
    'Python',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
