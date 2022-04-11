import React from "react";
import Dashboard from "../../../pages/workingPages/Dashboard";
import Clients from "../../../pages/workingPages/Clients";
import Loans from "../../../pages/workingPages/Loans";
import Pawns from "../../../pages/workingPages/Pawns";
import Users from "../../../pages/workingPages/Users";
import Settings from "../../../pages/workingPages/Settings";
import { Routes, Route } from "react-router-dom";

const MainPanel = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Dashboard />} />
				<Route exact path="/clients" element={<Clients />} />
				<Route exact path="/loans" element={<Loans />} />
				<Route exact path="/pawns" element={<Pawns />} />
				<Route exact path="/users" element={<Users />} />
				<Route exact path="/settings" element={<Settings />} />
			</Routes>
		</div>
	);
};

export default MainPanel;
