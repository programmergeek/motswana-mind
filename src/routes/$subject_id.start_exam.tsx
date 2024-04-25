import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from "@/components/layouts/main";
//import { start } from "repl";


interface Option {
  option_id: number;
  option_text: string;
  is_correct: boolean;
}

interface Question {
  question_id: number;
  question_text: string;
  options: Option[];
}

export const Route = createFileRoute('/$subject_id/start_exam')({
    component: Quiz,
});

function Quiz() {

	const { subject_id } = Route.useParams()

    const [questions, setQuestions] = useState<Question[]>([]);
    const [answers, setAnswers] = useState<{ [questionId: number]: number | null }>({});
    const [score, setScore] = useState<number | null>(null);
    const [quizStarted, setQuizStarted] = useState<boolean>(false);
    const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
    const [showAnswers, setShowAnswers] = useState<boolean>(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const quizDuration = 60; // 5 minutes (300 seconds)

    //const [subjectName, setSubjectName] = useState<string>("");
    
    useEffect(() => {
        // fetchSubjectName();
        if (quizStarted) {
            fetchQuestions();
            startTimer();
        }
    }, [quizStarted]);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get(`http://localhost:3333/questions/exam/${subject_id}`);
            const responseData = response.data as Question[]; // Type assertion
            setQuestions(responseData);
            //console.log(responseData);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };
    
    // const fetchSubjectName = async () => {
	// 	try {
	// 		const response = await axios.get(`http://localhost:3333/topic/name/${topic_id}`);
	// 		const responseData = response.data;
	// 		setTopicName(responseData[0].topic_name);
	// 		//console.log(topicName);
	// 	} catch (error) {
	// 		console.error("Error fetching subtopic name:", error);
	// 	}
	// };

    const startTimer = () => {
        setTimeLeft(quizDuration);
        const newTimer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime === 0) {
                    clearInterval(newTimer);
                    handleSubmitQuiz(); // Automatically submit quiz when time runs out
                    return 0;
                }
                if (prevTime !== null) {
                    return prevTime - 1;
                }
                return prevTime;
            });
        }, 1000);
        setTimer(newTimer);
    };

    const handleStartQuiz = () => {
        setQuizStarted(true);
    };

    const handleAnswerChange = (questionId: number, optionId: number) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: optionId,
        }));
    };

	const handleBack = () => {
        setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, questions.length - 1));
    };

    const handleSubmitQuiz = () => {
        // Grade the user's input
        if (timer) {
            clearInterval(timer); // Stop the timer when quiz is submitted
        }
        let userScore = 0;
        questions.forEach(question => {
            const userAnswer = answers[question.question_id];
            const correctOption = question.options.find(option => option.is_correct);
            if (userAnswer !== null && correctOption && userAnswer === correctOption.option_id) {
                userScore++;
            }
        });
        setScore(userScore);
        setQuizSubmitted(true);
    };
    
    const handleRestartQuiz = () => {
        setQuizStarted(false);
        setQuizSubmitted(false);
        setQuestions([]);
        setAnswers({});
        setScore(null);
        setShowAnswers(false); // Reset showAnswers state
        setCurrentQuestionIndex(0);
        if (timer) {
            clearInterval(timer); // Stop the timer when quiz is restarted
        }
    };

    const totalQuestions = questions.length;
	const percentage = ((score ?? 0) / totalQuestions) * 100;
	const roundedPercentage = `${percentage.toFixed(2)}%`;

    const hasTimeLimit = quizDuration !== null;
    const timeLimit = hasTimeLimit ? `${quizDuration / 60} minute(s)` : 'None';

    return (
		<Layout>
			<div>
				<h1>Exam</h1>
                {/* <h1>{topicName}</h1> */}
                <p>Time Limit: {timeLimit}</p>
				{!quizStarted && !quizSubmitted && (
					<button onClick={handleStartQuiz}>Start Exam</button>
				)}
				{quizStarted && !quizSubmitted && (
					<>
						{questions.length === 0 ? (
							<p>Loading...</p>
						) : (
							<>
								<div key={questions[currentQuestionIndex].question_id}>

                                    <p>Question {currentQuestionIndex + 1}/{questions.length}</p>

									<h2>{questions[currentQuestionIndex].question_text}</h2>
									<ul>
										{questions[currentQuestionIndex].options.map(option => (
											<li key={option.option_id}>
												<input
													type="radio"
													name={`question_${questions[currentQuestionIndex].question_id}`}
													id={`option_${option.option_id}`}
													value={option.option_id}
													onChange={() => handleAnswerChange(questions[currentQuestionIndex].question_id, option.option_id)}
													checked={answers[questions[currentQuestionIndex].question_id] === option.option_id}
												/>
												<label htmlFor={`option_${option.option_id}`}>{option.option_text}</label>
											</li>
										))}
									</ul>
								</div>
								{currentQuestionIndex > 0 && (
									<button onClick={handleBack}>Back</button>
								)}
								{currentQuestionIndex < questions.length - 1 && (
                                    <button onClick={handleNext}>Next</button>
								)}
                                <button onClick={handleSubmitQuiz}>Submit</button>
                                
                                <p>Time left: {timeLeft} seconds</p>
							</>
						)}
					</>
				)}
				{quizSubmitted && (
					<div>
						<h2>Quiz Score: {score} out of {totalQuestions} ({roundedPercentage})</h2>
						<button onClick={handleRestartQuiz}>Restart Exam</button>
						<button onClick={() => setShowAnswers(!showAnswers)}>Toggle Answers</button>
						{showAnswers && (
							<>
								<h2>Review Exam:</h2>
								{questions.map(question => (
									<div key={question.question_id}>
										<h3>{question.question_text}</h3>
										<p>
											Correct Answer: {question.options.find(option => option.is_correct)?.option_text}
											{question.options.find(option => option.is_correct) && <span> </span>}
										</p>
										<ul>
											{question.options.map(option => (
												<li key={option.option_id}>
													<span>{option.option_text}</span>
													{answers[question.question_id] === option.option_id && <span> (Selected)</span>}
												</li>
											))}
										</ul>
									</div>
								))}
							</>
						)}
					</div>
				)}
			</div>
		</Layout>
    );
}