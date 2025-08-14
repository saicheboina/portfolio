import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CustomCursor } from '@/components/custom-cursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'Senior Software Engineer Portfolio - Sai Cheboina',
  description:
    'Portfolio of Sai Cheboina, a Senior Software Engineer specializing in scalable, secure, and observable cloud-native platforms.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-body antialiased`}>
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
