import "./globals.css";
import { Montserrat, Oswald } from '@next/font/google';
import Head from 'next/head'

// Load Montserrat and Oswald
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'TIMOTHY FERGUSON | TLF NEXUS GROUP',
  description: 'Timothy Ferguson\'s vCard.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${montserrat.className} ${oswald.className}`}>
        {children}
      </body>
    </html>
  );
}
