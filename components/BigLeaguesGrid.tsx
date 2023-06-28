import { Leagues } from "@/models/Leagues";
import { Col, Row } from "react-bootstrap";
import BigLeaguesCard from "./BigLeaguesCard";

interface BigLeaguesGridProps {
	bigLeagues: Leagues[];
}

const BigLeaguesGrid = ({ bigLeagues }: BigLeaguesGridProps) => {
	return (
		<Row xs={1} md={2} xl={3} className="gy-3">
			{bigLeagues.map(league => (
				<Col key={league.league.id}>
					<BigLeaguesCard leagues={league} />
				</Col>
			))}
		</Row>
	);
}

export default BigLeaguesGrid;