import React from "react";
import  AboutUs  from "../../pages/AboutUs";
import  Contacts  from "../../pages/Contacts";
import  Home  from "../../pages/Home";
import  MarketPlace  from "../../pages/MarketPlace";
import  WorkingPage  from "../../pages/WorkingPage";

const Content = () => {
	return (
		<main  className="container">
			<Home />
			<MarketPlace />
			<AboutUs />
			<Contacts />
			<WorkingPage />
		</main>
	);
};

export default Content;
