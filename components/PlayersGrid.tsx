import { PlayerStatistics } from "@/models/PlayersResponse";
import { Col, Row } from "react-bootstrap";
import PlayersCard from "./PlayersCard";

interface PlayersGridProps {
	playersStatistics: PlayerStatistics[],
}

const PlayersGrid = ({ playersStatistics }: PlayersGridProps) => {
	return (
		<Row xs={1} md={2} xl={3} className="gy-3 mb-3">
			{playersStatistics.map(playerStatistics => (
				<Col key={playerStatistics.player.id}>
					<PlayersCard playerStatistics={playerStatistics} />
				</Col>
			))}
		</Row>
	);
}

export default PlayersGrid;