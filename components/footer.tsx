import { Card, Col, Container, Image, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<Container className="px-md-0 mt-5">
			<Card className="border-green">
				<Card.Body className="px-3">


					<Row className="align-items-center justify-content-around gy-2 text-center">
						<Col xs={12} md={6}>
							Copyright © 2023 Amanda Moreira
						</Col>
						<Col xs={12} md={6} className="text-right">
							<Image src="/img/logo_energy.png" alt="Logo Energy Source" className="w-25" />
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>

	);
}

export default Footer;