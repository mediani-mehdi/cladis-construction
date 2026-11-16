import type { ReactNode } from 'react';
import HomeNavigation from '@/components/HomeNavigation';
import HomeFooter from '@/components/HomeFooter';

export default function InformationPageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="v2-home v2-interior">
      <HomeNavigation />
      <div id="page-content" tabIndex={-1} className="v2-page-content">{children}</div>
      <HomeFooter />
    </main>
  );
}
