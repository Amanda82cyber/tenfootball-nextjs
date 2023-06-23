import FormConversion from "@/components/formConversion";
import { Symbol, SymbolsResponse } from "@/models/Symbols";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Col, Image, Row } from "react-bootstrap";

interface ConvertionProps {
  symbols: Symbol[],
}

export const getServerSideProps: GetServerSideProps<ConvertionProps> = async () => {
  const response = await fetch("http://data.fixer.io/api/symbols?access_key=" + process.env.FIXER_API_KEY);
  const result = await response.json();

  const formattedResult = Object.keys(result.symbols).map(function (key) {
    return {
      symbol: key,
      country: result.symbols[key],
    }
  });

  const symbolsResponse: SymbolsResponse = { symbols: formattedResult };

  return {
    props: { symbols: symbolsResponse.symbols },
  }
}

export default function Convertion({ symbols }: ConvertionProps) {
  return (
    <>
      <Head>
        <title key="title">Currency Conversion | Home</title>
      </Head>
      <main>
        <h2 className="mb-1">Descubra o poder da conversão de moedas em suas mãos!</h2>
        <h4 className="mb-3">Converta moedas com taxas de câmbio em tempo real</h4>

        <Row className="w-100 mx-0 mx-md-auto">
          <Col xs={12} md={9} lg={8} className="border-green p-3">
            <FormConversion symbols={symbols} />
          </Col>
          <Col xs={12} md={3} lg={4} className="d-none d-md-block text-center">
            <Image src="/svg/currency-animate.svg" alt="Animação Dinheiro" className="w-75" />
          </Col>
        </Row>
      </main>
    </>
  )
}
