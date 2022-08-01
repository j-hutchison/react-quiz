import React, { useState } from "react";
import questions from "./data/QUIZ_DATA.json";
import Card from "./components/Card";
import Scorecard from "./components/Scorecard";

import logo from "./logo.svg";
import "./App.css";

function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);

	const handleAnswerClick = (el) => {
		const selectedAnswer = el.target.dataset.index;
		if (questions[currentQuestion].answerOptions[selectedAnswer].isCorrect) {
			setScore(score + 1);
		}
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowScore(true);
		}
	};

	const handleReset = (el) => {
		setScore(0);
		setCurrentQuestion(0);
		setShowScore(false);
	};

	return (
		<div className="App">
			{!showScore && (
				<Card
					questions={questions}
					currentQuestion={currentQuestion}
					score={score}
					onClick={handleAnswerClick}
				></Card>
			)}
			{showScore && (
				<Scorecard
					score={score}
					numQuestions={questions.length}
					onReset={handleReset}
				></Scorecard>
			)}
		</div>
	);
}

export default App;
