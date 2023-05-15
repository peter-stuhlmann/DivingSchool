import { Inter } from 'next/font/google';

import StyledComponentsRegistry from './sc-registry';
import Header from './components/Header';
import Footer from './components/Footer';
import { title } from './data';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: title,
  description:
    'From PADI certification to breathtaking underwater excursions, our experienced instructors make diving dreams a reality.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ margin: 0, overflowX: 'hidden' }}
      >
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
