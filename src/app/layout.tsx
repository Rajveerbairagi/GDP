import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Growth Driven Pioneers',
  description: 'Collaboration. Development. Leadership.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
