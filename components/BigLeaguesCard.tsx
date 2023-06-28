import { Leagues } from "@/models/LeagueResponse";
import Link from "next/link";
import { Card, Col, Image } from "react-bootstrap";

interface BigLeaguesCardProps {
	leagues: Leagues,
}

const BigLeaguesCard = ({ leagues }: BigLeaguesCardProps) => {
	return (
		<Link href={`/league/${leagues.league.id}?season=${leagues.seasons[0].year}`}>
			<Card className="card-default border-blue h-100">
				<Card.Body className="row align-items-center">
					<Col xs={3} md={4} xl={3}>
						<Image src={leagues.league.logo} alt={"Img-league-" + leagues.league.id} fluid />
					</Col>

					<Col xs={9} md={8} xl={9}>
						<Card.Title>
							{leagues.league.name}
							<Image src={leagues.country.flag} alt={"Img-country-" + leagues.league.id} width={19} className="float-right" />
						</Card.Title>

						<Card.Subtitle>
							Temporada {leagues.seasons[0].year}
						</Card.Subtitle>
					</Col>
				</Card.Body>
			</Card>
		</Link>
	);
}

export default BigLeaguesCard;