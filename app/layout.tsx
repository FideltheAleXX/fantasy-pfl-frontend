import type { Metadata } from 'next';
import { Ubuntu, Inter } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const ubuntu = Ubuntu({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  title: 'Фентезі Футбол Першої ліги України',
  description: 'Фентезі Футбол Перша ліга України з футболу',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="uk"
      className={cn("h-full", "antialiased", ubuntu.variable, "font-sans", inter.variable)}
    >
      <body className={`${ubuntu.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
