import BigLeaguesGrid from "@/components/BigLeaguesGrid";
import LeaguesTable from "@/components/LeaguesTable";
import { Leagues } from "@/models/LeagueResponse";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface LeaguesViewProps {
  leagues: Leagues[],
  bigLeagues: Leagues[],
}

export const getServerSideProps: GetServerSideProps<LeaguesViewProps> = async () => {
  const response = await fetch(`https://v3.football.api-sports.io/leagues?current=true&type=league`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.API_KEY}`,
    },
  });

  const result = await response.json();
  const leagues: Leagues[] = result.response;
  const bigLeaguesId = [71, 39, 140, 78, 135, 61];
  const bigLeagues: Leagues[] = [];
  const newLeagues: Leagues[] = [];

  leagues.forEach((league: Leagues) => {
    if (bigLeaguesId.includes(league.league.id)) {
      bigLeagues.push(league);
    } else {
      newLeagues.push(league);
    }
  });

  return {
    props: { leagues: newLeagues, bigLeagues: bigLeagues },
  }
}

export default function LeaguesView({ leagues, bigLeagues }: LeaguesViewProps) {
  return (
    <>
      <Head>
        <title key="title">TenFootball | Ligas</title>
      </Head>
      <main>
        <h1 className="mb-1 color-blue">
          Ligas Fortes de Futebol
        </h1>

        <h5 className="mb-3">
          Explore as classificações, os times e os jogadores históricos dessas ligas de elite
        </h5>

        <BigLeaguesGrid bigLeagues={bigLeagues} />

        <h1 className="mb-1 mt-5 color-blue">
          Outras Ligas
        </h1>

        <h5 className="mb-3">
          Conheça outras ligas atuais ou encontre suas preferidas
        </h5>

        <LeaguesTable leagues={leagues} />
      </main>
    </>
  )
}
