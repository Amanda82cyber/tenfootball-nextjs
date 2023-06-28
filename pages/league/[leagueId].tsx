import LeagueStandingsTable from "@/components/LeagueStandingsTable";
import { LeagueStandings, StandingsResponse } from "@/models/StandingsResponse";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Col, Image, Row } from "react-bootstrap";

interface LeagueViewProps {
	leagueStandings: LeagueStandings,
}

export const getServerSideProps: GetServerSideProps<LeagueViewProps> = async ({ params, query }) => {
	const leagueId = params?.leagueId?.toString();
	const season = query.season;

	const response = await fetch(`https://v3.football.api-sports.io/standings?league=${leagueId}&season=${season}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "v3.football.api-sports.io",
			"x-rapidapi-key": `${process.env.API_KEY}`,
		},
	});

	const result = await response.json();
	const leagueStandings: StandingsResponse = result.response[0];

	return {
		props: { leagueStandings: leagueStandings.league, },
	}
}

const LeagueView = ({ leagueStandings }: LeagueViewProps) => {
	return (
		<>
			<Head>
				<title key="title">TenFootball | Classificação da Liga</title>
			</Head>

			<main>
				<Row className="align-items-center">
					<Col xs={3} md={2} xl={1} className="text-center">
						<Image src={leagueStandings.logo} alt="Logo da Liga" fluid />
					</Col>

					<Col xs={9} md={10} xl={11}>
						<h1 className="mb-1">
							{leagueStandings.name + "  "}
							<Image src={leagueStandings.flag} width={25} alt="Bandeira" />
						</h1>
						<h5>
							Temporada {leagueStandings.season}
						</h5>
					</Col>
				</Row>

				<h4 className="mb-1 mt-5 color-blue">
					Classificação
				</h4>

				<h6 className="mb-3">
					Veja como ficaram classificados os times nessa liga
				</h6>

				<LeagueStandingsTable standings={leagueStandings.standings[0]} leagueId={leagueStandings.id} season={leagueStandings.season} />
			</main>
		</>
	);
}

export default LeagueView;