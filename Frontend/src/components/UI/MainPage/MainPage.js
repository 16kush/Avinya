/** @format */

import React from "react";
import "./MainPage.css";

const mainPage = (props) => {
	return (
		<>
			<h1 className='Content-text'>
				<span className='heading-1'>{props.heading1}</span>
				<br />
				<span className='heading-2'>{props.heading2}</span>

				<div className='MainPageback'></div>
			</h1>
		</>
	);
};

export default mainPage;