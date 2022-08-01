import React from "react";
import classes from "./Scorecard.module.css";

const Scorecard = (props) => {
	return (
		<div className={classes["score-card"]}>
			<h1 className={classes["score-card-message"]}>
				You scored {props.score} out of {props.numQuestions}
			</h1>
		</div>
	);
};

export default Scorecard;
