import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Script from 'next/script';
import { Intercom, LiveChatLoaderProvider } from 'react-live-chat-loader';
import { GlobalDialog, GlobalUIManager } from '../contexts/GlobalUIManager';
import { useRouter } from 'next/router';
import SummerBanner from '../components/banners/SummerBanner';
import ShowSnackbar from '../components/Snackbar';
import GeneralBanner from '../components/banners/GeneralBanner';
import CrowdcubeBanner from '../components/banners/CrowdcubeBanner';

const excludedPaths = ['/techcult', '/pricing', '/stackcommerce', '/password-generator'];

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const pathname = route.pathname;
  const isExcludedPath = excludedPaths.findIndex((path) => pathname.includes(path)) !== -1;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <LiveChatLoaderProvider provider="intercom" providerKey="ta2ffq6n">
      <GlobalUIManager initialDialogs={[{ key: GlobalDialog.Auth, isOpen: false }]}>
        <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
        <Component {...pageProps} />
        <ShowSnackbar />
        <CrowdcubeBanner />
        {/* {isExcludedPath ? null : <GeneralBanner textContent={bannerLang.GeneralBanner} />} */}
        <Intercom />
      </GlobalUIManager>
    </LiveChatLoaderProvider>
  );
}

export default MyApp;
