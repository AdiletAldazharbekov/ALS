import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const TopNavbar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true;
		}
	};

	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-3">
				<Navbar.Brand onClick={() => navigate("/")}>
					Web Lombard
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							onClick={() => navigate("/")}
							className={pathMatchRoute("/") ? "" : ""}
						>
							Home
						</Nav.Link>
						<Nav.Link
							onClick={() => navigate("/market-place")}
							className={
								pathMatchRoute("/market-place") ? "" : ""
							}
						>
							MarketPlace
						</Nav.Link>
						<Nav.Link
							onClick={() => navigate("/about-us")}
							className={pathMatchRoute("/about-us") ? "" : ""}
						>
							AboutUs
						</Nav.Link>
						<Nav.Link
							onClick={() => navigate("/contacts")}
							className={pathMatchRoute("/contacts") ? "" : ""}
						>
							Contacts
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link
							onClick={() => navigate("/working-page")}
							className={
								pathMatchRoute("/working-page") ? "" : ""
							}
						>
							WorkingPage
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default TopNavbar;
