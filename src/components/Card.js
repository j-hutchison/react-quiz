import react from "react";
import classes from "./Card.module.css";
import Answer from "./Answer";

const Card = (props) => {
	return (
		<div className={classes["card"]}>
			<div className={classes["card-question"]}>
				<h1 className={classes["card-title"]}>
					Question {props.currentQuestion + 1}
					<span className={classes["questions-count"]}>
						/{props.questions.length}
					</span>
				</h1>
				<p className={classes["question-text"]}>
					{props.questions[props.currentQuestion].questionText}
				</p>
			</div>
			<div className={classes["card-answers"]}>
				{props.questions[props.currentQuestion].answerOptions.map(
					(el, index) => {
						return (
							<Answer
								index={index}
								answerText={el.answerText}
								onClick={props.onClick}
							></Answer>
						);
					}
				)}
			</div>
		</div>
	);
};

export default Card;
