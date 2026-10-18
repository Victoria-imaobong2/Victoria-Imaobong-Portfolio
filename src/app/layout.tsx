import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Victoria-Imaobong Solomon | Software Engineer',
  description: 'Software Engineering portfolio showcasing web apps, microservices, blockchain logistics, and mobile development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ backgroundColor: '#fbebe8' }}>
      <body className="bg-[#fbebe8] text-stone-900 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}