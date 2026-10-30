import type { Metadata, Viewport } from 'next';
import '../styles/globals.scss';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nexora AI — Intelligent Systems for Complex Problems',
  description:
    'Nexora AI engineers production-grade artificial intelligence, agentic workflows, and high-performance software systems for complex business and engineering challenges.',
  keywords: [
    'AI Systems Engineering',
    'Agentic AI',
    'Enterprise RAG',
    'Decision Support Systems',
    'Custom AI Software',
    'LeadFlow',
    'Nexora AI',
  ],
  authors: [{ name: 'Nexora AI Engineering Team' }],
  openGraph: {
    title: 'Nexora AI — Intelligent Systems for Complex Problems',
    description:
      'We engineer intelligence for complex worlds. Production-grade AI systems, agentic workflows, and custom enterprise software.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Nexora AI',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#060608',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
