import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forums | Vera Rust Servers - Community Discussion & Support',
  description: 'Join the Vera Rust community forums. Report bugs, suggest features, apply for staff positions, and connect with other Rust players on our high-performance servers.',
  keywords: [
    'rust forums',
    'rust server community',
    'vera rust',
    'rust bug reports',
    'rust suggestions',
    'rust staff applications',
    'rust server forums',
    'rust multiplayer',
    'rust community',
    'rust gaming',
  ],
  openGraph: {
    title: 'Vera Rust Forums - Join Our Community',
    description: 'Connect with Rust players, report bugs, share suggestions, and join our staff team. Active community with responsive admins.',
    type: 'website',
    images: [
      {
        url: '/og-forums.jpg',
        width: 1200,
        height: 630,
        alt: 'Vera Rust Forums',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vera Rust Forums - Community Hub',
    description: 'Join the discussion on Vera Rust servers. Bug reports, suggestions, staff applications & more.',
  },
  alternates: {
    canonical: 'https://verarust.com/forums',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ForumsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
