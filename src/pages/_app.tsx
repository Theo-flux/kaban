import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '@/styles/MyGlobalStyles';
import { Providers } from '../app/Provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Kanban Task Management App" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/kanban-icon.svg" />
      </Head>
      <GlobalStyles />
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ThemeProvider>
  );
}
