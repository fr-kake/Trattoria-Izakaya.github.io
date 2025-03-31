import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from "next/script";
const inter = Inter({
  subsets: ['latin']
});
export const metadata: Metadata = {
  title: 'My New App',
  description: 'Generated by Onlook'
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" data-oid="c4p2kcf">
            <body className={inter.className} data-oid="eg6b5he">
                {children}
            
                <Script src="/builtwith.js" strategy="afterInteractive" />
            </body>
        </html>;
}