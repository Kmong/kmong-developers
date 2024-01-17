import type { AppProps } from 'next/app';
import { baseCSS, dialogStyle } from '@kmong/ui';
import { Global } from '@emotion/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={[baseCSS, dialogStyle]} />
      <Component {...pageProps} />
    </>
  );
}
