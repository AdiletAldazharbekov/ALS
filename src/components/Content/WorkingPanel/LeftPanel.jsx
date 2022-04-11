import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";

const LeftPanel = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true;
		}
	};

	return (
		<div className="left-panel bg-danger">
			<ul>
				<Nav.Link
					onClick={() => navigate("/working-page/")}
					className={pathMatchRoute("/working-page/") ? "" : ""}
				>
					Dashboard
				</Nav.Link>
				<Nav.Link
					onClick={() => navigate("/working-page/clients")}
					className={
						pathMatchRoute("/working-page/clients") ? "" : ""
					}
				>
					Clients
				</Nav.Link>
				<Nav.Link
					onClick={() => navigate("/working-page/loans")}
					className={pathMatchRoute("/working-page/loans") ? "" : ""}
				>
					Loans
				</Nav.Link>
				<Nav.Link
					onClick={() => navigate("/working-page/pawns")}
					className={pathMatchRoute("/working-page/pawns") ? "" : ""}
				>
					Pawns
				</Nav.Link>
				<Nav.Link
					onClick={() => navigate("/working-page/users")}
					className={pathMatchRoute("/working-page/users") ? "" : ""}
				>
					Users
				</Nav.Link>
				<Nav.Link
					onClick={() => navigate("/working-page/settings")}
					className={
						pathMatchRoute("/working-page/settings") ? "" : ""
					}
				>
					Settings
				</Nav.Link>
			</ul>
		</div>
	);
};

export default LeftPanel;
