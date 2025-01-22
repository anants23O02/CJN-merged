import './globals.css'
import React from 'react';

export const metadata = {
  title: 'My App',
  description: 'Next.js with Ant Design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
