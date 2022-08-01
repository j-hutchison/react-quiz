import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);

	const questions = [
		{
			questionText: "What is the capital of France?",
			answerOptions: [
				{ answerText: "New York", isCorrect: false },
				{ answerText: "London", isCorrect: false },
				{ answerText: "Paris", isCorrect: true },
				{ answerText: "Dublin", isCorrect: false },
			],
		},
		{
			questionText: "Who is the CEO of Tesla?",
			answerOptions: [
				{ answerText: "Jeff Bezos", isCorrect: false },
				{ answerText: "Elon Musk", isCorrect: true },
				{ answerText: "Bill Gates", isCorrect: false },
				{ answerText: "Tony Stark", isCorrect: false },
			],
		},
		{
			questionText: "The iPhone was created by which company?",
			answerOptions: [
				{ answerText: "Apple", isCorrect: true },
				{ answerText: "Intel", isCorrect: false },
				{ answerText: "Amazon", isCorrect: false },
				{ answerText: "Microsoft", isCorrect: false },
			],
		},
		{
			questionText: "How many Harry Potter books are there?",
			answerOptions: [
				{ answerText: "1", isCorrect: false },
				{ answerText: "4", isCorrect: false },
				{ answerText: "6", isCorrect: false },
				{ answerText: "7", isCorrect: true },
			],
		},
	];

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

	return (
		<div className="App">
			<div class="card">
				<div className="card-question">
					<h1 className="card-title">
						Question {currentQuestion + 1}
						<span className="questions-count">/{questions.length}</span>
					</h1>
					<p className="question-text">
						{questions[currentQuestion].questionText}
					</p>
				</div>
				<div className="card-answers">
					{questions[currentQuestion].answerOptions.map((el, index) => {
						return (
							<p
								className="card-answer-text"
								data-index={index}
								onClick={handleAnswerClick}
							>
								{el.answerText}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
