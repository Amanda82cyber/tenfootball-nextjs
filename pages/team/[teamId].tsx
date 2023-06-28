import PlayersGrid from "@/components/PlayersGrid";
import { PlayerStatistics } from "@/models/PlayersResponse";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Col, Image, Row } from "react-bootstrap";

interface TeamViewProps {
	playersStatistics: PlayerStatistics[],
}

export const getServerSideProps: GetServerSideProps<TeamViewProps> = async ({ params, query }) => {
	const teamId = params?.teamId?.toString();
	const leagueId = query.leagueId;
	const season = query.season;

	const response = await fetch(`https://v3.football.api-sports.io/players?team=${teamId}&league=${leagueId}&season=${season}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "v3.football.api-sports.io",
			"x-rapidapi-key": `${process.env.API_KEY}`,
		},
	});

	const result = await response.json();
	const playersStatistics: PlayerStatistics[] = result.response;

	return {
		props: { playersStatistics: playersStatistics, },
	}
}

const TeamView = ({ playersStatistics }: TeamViewProps) => {
	return (
		<>
			<Head>
				<title key="title">TenFootball | Time da Liga</title>
			</Head>

			<main>
				<Row className="align-items-center">
					<Col xs={3} md={2} xl={1} className="text-center">
						<Image src={playersStatistics[0].statistics[0].team.logo} alt="Logo do time" fluid />
					</Col>

					<Col xs={9} md={10} xl={11}>
						<h1 className="mb-0">
							{playersStatistics[0].statistics[0].team.name}
						</h1>

						<h5 className="mb-0">
							{playersStatistics[0].statistics[0].league.name + "  "}
							<Image src={playersStatistics[0].statistics[0].league.flag} width={20} alt="Bandeira" />
						</h5>

						<h6>
							<small>Temporada {playersStatistics[0].statistics[0].league.season}</small>
						</h6>
					</Col>
				</Row>

				<h3 className="mb-1 mt-5 color-blue">
					Jogadores do Time
				</h3>

				<h6 className="mb-0">
					Conheça os jogadores que representaram esse time
				</h6>

				<PlayersGrid playersStatistics={playersStatistics} />
			</main>
		</>
	);
}

export default TeamView;