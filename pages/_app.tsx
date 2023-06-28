import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Exo_2 } from 'next/font/google';
import Head from 'next/head';
import { Col, Row } from 'react-bootstrap';
import Menu from '@/components/menu';

const exo_2 = Exo_2({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={exo_2.className}>
      <Head>
        <title key="title">TenFootball</title>
        <meta name="description" content="Projeto em Next.js feito para Energy Source" />
        <meta name="author" content="Amanda Moreira" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svg/logo.svg" />
      </Head>

      <Row>
        <Col xs={12} lg={3} xl={2} className="border-menu">
          <Menu />
        </Col>

        <Col xs={12} lg={9} xl={10} className="pt-5 px-4">
          <Component {...pageProps} />
        </Col>
      </Row>
      {/* <Footer /> */}
    </div>
  );
}
