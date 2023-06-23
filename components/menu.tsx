import { Container, Image, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
	const router = useRouter();
	const pathname = router.pathname;

	return (
		<>
			<Container className="px-md-0">
				<Navbar bg="light" sticky="top" expand="md" collapseOnSelect className="mt-3 px-3 border-green">
					<Navbar.Brand as={Link} href="/">
						<Image src="/img/logo.png" alt="logo" width="28px" />{' '}
						Currency Conversion
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="menu" />

					<Navbar.Collapse id="menu">
						<Nav>
							<Nav.Link as={Link} href="/" className={`${pathname == '/' ? 'active' : ''}`}>
								Conversão
							</Nav.Link>
							<Nav.Link as={Link} href="/historicalRates" className={`${pathname == '/historicalRates' ? 'active' : ''}`}>
								Taxas Históricas
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</>
	);
}

export default Menu;