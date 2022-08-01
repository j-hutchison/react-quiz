import React from "react";
import classes from "./Scorecard.module.css";

const Scorecard = (props) => {
	return (
		<div className={classes["score-card"]}>
			<h1 className={classes["score-card-message"]}>
				You scored {props.score} out of {props.numQuestions}
			</h1>
			<button className={classes["btn-reset"]} onClick={props.onReset}>
				Reset
			</button>
		</div>
	);
};

export default Scorecard;
