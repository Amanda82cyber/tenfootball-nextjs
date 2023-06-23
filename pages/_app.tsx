import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Exo_2 } from 'next/font/google';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Menu from '@/components/menu';
import styles from '@/styles/app.module.css';
import Footer from '@/components/footer';

const exo_2 = Exo_2({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={exo_2.className}>
      <Head>
        <title key="title">Currency Conversion</title>
        <meta name="description" content="Projeto em Next.js feito para Energy Source" />
        <meta name="author" content="Amanda Moreira" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo-mini.png" />
      </Head>

      <Menu />

      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>

      <Footer />
    </div>
  );
}
