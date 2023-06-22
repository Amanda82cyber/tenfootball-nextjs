import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Exo_2 } from 'next/font/google';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

const exo_2 = Exo_2({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={exo_2.className}>
      <Head>
        <title key="title">Currency Conversion</title>
        <meta name="description" content="Project in Next.js made for Energy Source" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
