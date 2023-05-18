import Head from 'next/head';
import type { AppProps } from 'next/app';
import MyGlobalStyles from '@/assets/MyGlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Kanban Task Management App" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyGlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
