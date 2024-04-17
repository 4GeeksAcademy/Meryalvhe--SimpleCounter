import React from "react";
import { SecondsCounter } from "./SecondsCounter";
import { CountDown } from "./CountDown";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className = "mt-2">
				<h1 className="text-decoration-underline"> Simple Counter </h1>
			</div>
			<SecondsCounter/>

			<div clasName = "mt-2">
				<h1 className="text-decoration-underline"> Count Down </h1>
			</div>

			<CountDown duration = { 2 * 24 * 60 * 60 * 1000}/>
			

		</div>
	);
};

export default Home;
