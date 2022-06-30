import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./index.css";
loadProgressBar();
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
