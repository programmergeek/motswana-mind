/*
Author: Waseem Mosam 
Purpose: This file is used to create the exercise page for the user to complete the exercise.
*/


// imports
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "@/components/layouts/main";
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// interface to store options for questions
interface Option {
	option_id: number;
	option_text: string;
	is_correct: boolean;
}

// interface to store questions
interface Question {
	question_id: number;
	question_text: string;
	options: Option[];
}

// route to page
export const Route = createFileRoute("/$sub_topic_id/start_exercise")({
	component: Quiz,
});

function Quiz() {

	const { sub_topic_id } = Route.useParams(); //path parameter

	//state variables
	const [questions, setQuestions] = useState<Question[]>([]);
	const [answers, setAnswers] = useState<{ [questionId: number]: string }>({});
	const [score, setScore] = useState<number | null>(null);
	const [quizStarted, setQuizStarted] = useState<boolean>(false);
	const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
	const [showAnswers, setShowAnswers] = useState<boolean>(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [shortAnswer] = useState<boolean>(true);
	const [subTopicName, setSubTopicName] = useState<string>("");

	// variables to calculate the score
	const totalQuestions = questions.length;
	const percentage = ((score ?? 0) / totalQuestions) * 100;
	const roundedPercentage = `${percentage.toFixed(2)}%`;

	// useEffect to fetch data
	useEffect(() => {
		fetchSubTopicName();
		fetchQuestions();
		if (quizStarted) {
		}
	}, [quizStarted]);

	// fetch questions from the database for the exercise
	const fetchQuestions = async () => {
		try {
			const response = await axios.get(`http://localhost:3333/questions/exercise/${sub_topic_id}`);
			const responseData = response.data as Question[];
			setQuestions(responseData); // set the questions
		} catch (error) {
			console.error('Error fetching questions:', error);
		}
	};

	// fetch the sub topic name
	const fetchSubTopicName = async () => {
		try {
			const response = await axios.get(`http://localhost:3333/sub_topic/name/${sub_topic_id}`);
			const responseData = response.data;
			setSubTopicName(responseData[0].sub_topic_name); // set the sub topic name
			// console.log(subTopicName);
		} catch (error) {
			console.error("Error fetching subtopic name:", error);
		}
	};

	// functions to handle the starting the assessment
	const handleStartQuiz = () => {
		setQuizStarted(true);
	};

	// function to handle the change in answers
	const handleAnswerChange = (questionId: number, value: string) => {
		setAnswers(prevAnswers => ({
			...prevAnswers,
			[questionId]: value,
		}));
	};

	// functions to handle the navigation of the questions
	const handleBack = () => {
		setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
	};

	const handleNext = () => {
		setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, questions.length - 1));
	};

	// function to submit the assessment
	const handleSubmitQuiz = () => {
		let userScore = 0;
		questions.forEach(question => {
			const userAnswer = (answers[question.question_id]).trim();
			const correctAnswer = (question.options[0].option_text).trim();

			if (/^\d*\.?\d+$/.test(correctAnswer)) { // Check if the correct answer is a number
				let answer = Number(userAnswer);
				let correct = Number(correctAnswer);
				if (answer === correct) {
					userScore++;
				}
			} else {
				if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) { // if correct answer is a string
					userScore++;
				}
			}
		});
		setScore(userScore);
		setQuizSubmitted(true);
	};

	// function to handle the restarting of the assessment
	const handleRestartQuiz = () => {
		setQuizStarted(false);
		setQuizSubmitted(false);
		setQuestions([]);
		setAnswers({});
		setScore(null);
		setShowAnswers(false);
		setCurrentQuestionIndex(0);
	};

	return (
		<Layout>
			<div className="pt-10 flex flex-col items-center justify-center bg-[url(/pattern.jpeg)]">
				{/* Display Assessment info */}
				{!quizStarted && !quizSubmitted && (
					<Card className="w-6/12 max-w-6xl mx-auto my-14 bg-gray-200">
						<CardHeader className="mb-4 md:mb-6">
							<div className="flex justify-between items-center">
								<h2 className="text-2xl md:text-3xl font-bold">{subTopicName}</h2>
							</div>
						</CardHeader>
						<CardContent className=" flex grid-cols-1 md:grid-cols-3 md:gap-6">
							<div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950 flex flex-col items-center justify-center w-[70%] p-7">
								<img
									alt="Card Image"
									className="w-[30%] h-[40%]"
									height="240"
									src="/icons/questions.png"
									width="400"
								/>
								<div className="p-4 md:p-6">
									<h3 className="text-lg md:text-xl font-semibold mb-2">{totalQuestions} questions</h3>
								</div>
							</div>
							<div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950 flex flex-col items-center justify-center w-[70%] p-7">
								<img
									alt="Card Image"
									className="w-[30%] h-[40%]"
									height="240"
									src="/icons/documents.png"
									width="400"
								/>
								<div className="p-4 md:p-6">
									<h3 className="text-lg md:text-xl font-semibold mb-2">Exercise</h3>

								</div>
							</div>
							<div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950 flex flex-col items-center justify-center w-[70%] p-7">
								<img
									alt="Card Image"
									className="w-[30%] h-[42%]"
									height="240"
									src="/icons/clock.png"
									width="400"
								/>
								<div className="p-4 md:p-6">
									<h3 className="text-lg md:text-xl font-semibold mb-2">None</h3>
								</div>
							</div>
						</CardContent>
						<CardFooter className="mt-4 md:mt-6 flex justify-end">
							<Button onClick={handleStartQuiz} className="h-12 w-22">Start Exercise</Button>
						</CardFooter>
					</Card>
				)}

				{quizStarted && !quizSubmitted && (
					<>
						{/* Display Questions and input field */}
						{questions.length === 0 ? (
							<p>Loading...</p>
						) : (
							<>
								<Card className="flex flex-col items-center justify-center w-6/12  mx-auto my-14 bg-transparent border-none">
									<div className="w-[70%]  p-6 bg-white rounded-lg shadow-md dark:bg-gray-800" key={questions[currentQuestionIndex].question_id}>
										<div className="flex items-center justify-between mb-6">
											<div className="text-gray-500 dark:text-gray-400" >
												Question <span className="font-bold">{currentQuestionIndex + 1}</span> of {questions.length}
											</div>

										</div>
										<h2 className="text-2xl font-bold mb-4 dark:text-gray-200">{questions[currentQuestionIndex].question_text}</h2>
										<div className="space-y-3">
											<div className="flex items-center">
												<input
													className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-gray-800 dark:focus:border-gray-800"
													type="text"
													placeholder="Enter your answer"
													value={answers[questions[currentQuestionIndex].question_id] || ''}
													onChange={(e) => handleAnswerChange(questions[currentQuestionIndex].question_id, e.target.value)}
												/>
											</div>

										</div>
										<div className="flex gap-4 mt-6">
											<Button onClick={handleBack} disabled={currentQuestionIndex === 0}>Back</Button>
											<Button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</Button>
											{currentQuestionIndex === questions.length - 1 && (
												<Button onClick={handleSubmitQuiz} className="ml-auto">Submit</Button>
											)}
										</div>
									</div>
								</Card>
							</>
						)}
					</>
				)}
				{quizSubmitted && (
					// Display the score and correct answers
					<Card className="my-5 p-10 w-6/12 bg-gray-200">
						<div>
							<h1 className="ml-4">Results - {subTopicName} Exercise</h1>
							<div>
								<Card className="p-4 my-3">
									<h2>Quiz Score: {score} out of {totalQuestions} ({roundedPercentage})</h2>
								</Card>
							</div>
							<Button onClick={handleRestartQuiz} className="my-5 mr-4">Restart Exercise</Button>
							<Button onClick={() => setShowAnswers(!showAnswers)} className="my-5 mr-4">Toggle Answers</Button>
							{showAnswers && (
								<>
									<h2>Review Exercise:</h2>
									{questions.map(question => (
										<div key={question.question_id}>
											<h3>{question.question_text}</h3>
											{shortAnswer ? ( // Display the correct answer
												<>
													<p>Correct Answer: {question.options[0].option_text}</p>
													<p>User's Answer: {answers[question.question_id]}</p>
												</>
											) : null}
										</div>
									))}
								</>
							)}
						</div>
					</Card>
				)}
			</div>
		</Layout>
	);
}



