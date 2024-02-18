import type { AppProps } from 'next/app';
import '../styles/index.scss';
import { Montserrat, Nunito } from 'next/font/google';
import { ToTop } from '@components/shared/ToTop';

export const interMontserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const nunitoMontserrat = Nunito({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-nunito',
});

import { Dispatch, SetStateAction, createContext, useState } from 'react';

export const VisuallyImpairedContext = createContext<Dispatch<SetStateAction<boolean>>>(() => {});

export default function App({ Component, pageProps }: AppProps) {
  const [visuallyimpaire, setVisuallyImpaired] = useState(false);
  return (
    <VisuallyImpairedContext.Provider value={setVisuallyImpaired}>
      <main id="top" className={`${interMontserrat.variable} ${nunitoMontserrat.variable} font-sans ${visuallyimpaire ? 'VisuallyImpaired' : ''}`}>
        <ToTop />
        <Component {...pageProps} />
        <div className={`${interMontserrat.variable} ${nunitoMontserrat.variable} font-sans`} id="modal-root"></div>
      </main>
    </VisuallyImpairedContext.Provider>
  );
}
