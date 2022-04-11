import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import MarketPlace from "../../pages/MarketPlace";
import AboutUs from "../../pages/AboutUs";
import Contacts from "../../pages/Contacts";
import WorkingPage from "../../pages/WorkingPage";

const Content = () => {
	return (
		<div className="content">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route
						exact
						path="/market-place"
						element={<MarketPlace />}
					/>
					<Route exact path="/about-us" element={<AboutUs />} />
					<Route exact path="/contacts" element={<Contacts />} />
					<Route
						exact
						path="/working-page/*"
						element={<WorkingPage />}
					/>
				</Routes>
		</div>
	);
};

export default Content;
