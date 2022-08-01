import react from "react";
import classes from "./Answer.module.css";

const Answer = (props) => {
	return (
		<p
			className={classes["card-answer-text"]}
			data-index={props.index}
			onClick={props.onClick}
		>
			{props.answerText}
		</p>
	);
};

export default Answer;
