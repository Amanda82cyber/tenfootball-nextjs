import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
	const router = useRouter();
	const pathname = router.pathname;
	const year = (new Date()).getFullYear();

	return (
		<>
			<Row className="align-items-center text-left text-lg-center py-3 h-100vh">
				<Col xs={3} md={2} lg={12} className="text-center px-3 align-self-start">
					<Image src="/svg/logo-animada.svg" rounded alt="Logo" className="w-100" />
					<h2 className="color-blue mt-2 d-none d-lg-block">TenFootball</h2>
				</Col>

				<Col xs={9} md={10} lg={12} className="align-self-start">
					<h2 className="color-blue mb-0 d-lg-none">TenFootball</h2>

					<Row>
						<Col xs={3} lg={12} className="px-1">
							<Link href="/" className={`${pathname == '/' ? 'color-blue' : ''}`}>Ligas</Link>
						</Col>
					</Row>
				</Col>

				<Col lg={12} className="d-none d-lg-block align-self-end">
					<div>
						© {year + " "}
						<Link href="https://www.linkedin.com/in/amanda-moreira-8131381a2/" target="_blank">
							Amanda Moreira
						</Link>
					</div>

					<div>
						<small>Developed to</small>

						<Link href="https://www.energysource.com.br/" target="_blank">
							<Image src="/img/logo_energy.png" rounded alt="Logo Energy" className="w-50" />
						</Link>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default Menu;