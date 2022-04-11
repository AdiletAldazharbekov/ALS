import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Content from "./components/Content/Content";
import TopNavbar from "./components/Navbars/TopNavbar";

const App = () => {
	return (
		<div className="app">
			<Router>
				<TopNavbar />
				<Content />
			</Router>
		</div>
	);
};

export default App;
