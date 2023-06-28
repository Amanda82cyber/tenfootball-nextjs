import { PlayerStatistics } from "@/models/PlayersResponse";
import { faSquare, faFutbol, faBirthdayCake, faHands } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Image, Row } from "react-bootstrap";

interface PlayersCardProps {
	playerStatistics: PlayerStatistics,
}

const PlayersCard = ({ playerStatistics }: PlayersCardProps) => {
	return (
		<Card className="card-default border-blue h-100">
			<Card.Body className="row align-items-center p-2">
				<Col xs={3} md={3} xl={3} className="px-1">
					<Image src={playerStatistics.player.photo} alt={"Img-player-" + playerStatistics.player.id} fluid />
				</Col>

				<Col xs={9} md={9} xl={9}>
					<Card.Title className="color-blue mb-1">
						<div dangerouslySetInnerHTML={{ __html: playerStatistics.player.name }}></div>
						{playerStatistics.statistics[0].games.captain ? ' (Captain)' : ''}
					</Card.Title>

					<Card.Subtitle>
						{playerStatistics.statistics[0].games.position}

						<small>
							{
								" - " +
								(playerStatistics.statistics[0].games.appearences != null ?
									playerStatistics.statistics[0].games.appearences :
									0)
								+ "x em campo"
							}
						</small>
					</Card.Subtitle>

					<Row className="align-items-center gy-1">
						{(playerStatistics.statistics[0].cards.yellow != null && playerStatistics.statistics[0].cards.yellow > 0) &&
							<Col xs={2} className="px-1 small">
								<FontAwesomeIcon icon={faSquare} color="yellow" width={13} />
								{" " + playerStatistics.statistics[0].cards.yellow}
							</Col>
						}

						{(playerStatistics.statistics[0].cards.red != null && playerStatistics.statistics[0].cards.red > 0) &&
							<Col xs={2} className="px-1 small">
								<FontAwesomeIcon icon={faSquare} color="red" width={13} />
								{" " + playerStatistics.statistics[0].cards.red}
							</Col>
						}

						{(playerStatistics.statistics[0].goals.total != null && playerStatistics.statistics[0].goals.total > 0) &&
							<Col xs={4} className="px-1 small">
								<FontAwesomeIcon icon={faFutbol} color="green" width={13} />
								{" " + playerStatistics.statistics[0].goals.total + " gols"}
							</Col>
						}

						{(playerStatistics.statistics[0].goals.saves != null && playerStatistics.statistics[0].goals.saves > 0) &&
							<Col xs={4} className="px-1 small">
								<FontAwesomeIcon icon={faHands} color="green" width={13} />
								{" " + playerStatistics.statistics[0].goals.saves + " def."}
							</Col>
						}

						{(playerStatistics.player.age != null && playerStatistics.player.age > 0) &&
							<Col xs={5} className="px-1 small">
								<FontAwesomeIcon icon={faBirthdayCake} className="color-blue" width={13} />
								{" " + playerStatistics.player.age + " anos"}
							</Col>
						}

						{(playerStatistics.statistics[0].fouls.committed != null && playerStatistics.statistics[0].fouls.committed > 0) &&
							<Col xs={6} className="px-1 small">
								F. Feitas:
								{" " + playerStatistics.statistics[0].fouls.committed}
							</Col>
						}

						{(playerStatistics.statistics[0].fouls.drawn != null && playerStatistics.statistics[0].fouls.drawn > 0) &&
							<Col xs={6} className="px-1 small">
								F. Sofridas:
								{" " + playerStatistics.statistics[0].fouls.drawn}
							</Col>
						}

						{(playerStatistics.statistics[0].passes.total != null && playerStatistics.statistics[0].passes.total > 0) &&
							<Col xs={6} className="px-1 small">
								N° Passes:
								{" " + playerStatistics.statistics[0].passes.total}
							</Col>
						}

						{(playerStatistics.statistics[0].dribbles.success != null && playerStatistics.statistics[0].dribbles.success > 0) &&
							<Col xs={6} className="px-1 small">
								N° Dribles:
								{" " + playerStatistics.statistics[0].dribbles.success}
							</Col>
						}
					</Row>
				</Col>
			</Card.Body>
		</Card>
	);
}

export default PlayersCard;