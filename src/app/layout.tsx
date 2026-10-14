import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Victoria-Imaobong Solomon | Software Engineer',
  description: 'Software Engineering portfolio showcasing web apps, microservices, blockchain logistics, game development, and mobile development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}