/*
Author: Waseem Mosam
Purpose: This file is used to create the exnamination page for the user to complete the practice exam.
*/

// imports
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";
import {
    Card
} from "@/components/ui/card";

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
export const Route = createFileRoute('/$subject_id/start_exam')({
    component: Quiz,
});

function Quiz() {

    const { subject_id } = Route.useParams() //path parameter

    // state variables
    const [questions, setQuestions] = useState<Question[]>([]);
    const [answers, setAnswers] = useState<{ [questionId: number]: number | null }>({});
    const [score, setScore] = useState<number | null>(null);
    const [quizStarted, setQuizStarted] = useState<boolean>(false);
    const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
    const [showAnswers, setShowAnswers] = useState<boolean>(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const quizDuration = 600; // 10 minutes (600 seconds)

    useEffect(() => {
        // fetchSubjectName();
        fetchQuestions();
        if (quizStarted) {
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
            <div className="pt-10 flex flex-col items-center justify-center bg-[url(/pattern.jpeg)]">
                {!quizStarted && !quizSubmitted && (
                    <Card className="my-5 p-10 w-7/12 bg-gray-200">
                        <Card className="p-5 my-5">
                            <h1>{totalQuestions} questions</h1>
                        </Card>
                        <Card className="p-5 my-5">
                            <h1>Exam</h1>
                        </Card>
                        <Card className="p-5 my-5">
                            <p>Time Limit: {timeLimit}</p>
                        </Card>
                        <Button onClick={handleStartQuiz} className="float-right">
                            Start Exam
                        </Button>
                    </Card>
                )}
                {quizStarted && !quizSubmitted && (
                    <>
                        {questions.length === 0 ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                <Card className="my-5 p-10 w-7/12 bg-gray-200">
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
                                        <Button onClick={handleBack} className="my-5 mr-2">Back</Button>
                                    )}
                                    {currentQuestionIndex < questions.length - 1 && (
                                        <Button onClick={handleNext} className="my-5 mr-4">Next</Button>
                                    )}
                                    <Button onClick={handleSubmitQuiz} className="my-5 mr-2">Submit</Button>

                                    <p>Time left: {timeLeft} seconds</p>
                                </Card>
                            </>
                        )}
                    </>
                )}
                {quizSubmitted && (
                    <Card className="my-5 p-10 w-6/12 bg-gray-200">
                        <div>
                            <h1 className="ml-4">Practice Examination Results</h1>
                            <div>
                                <Card className="p-4 my-3">
                                    <h2>Exercise Score: {score} out of {totalQuestions} ({roundedPercentage})</h2>
                                </Card>
                            </div>
                            <Button onClick={handleRestartQuiz} className="my-5 mr-2">Restart Exam</Button>
                            <Button onClick={() => setShowAnswers(!showAnswers)} className="my-5 mr-2">Toggle Answers</Button>
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
                    </Card>
                )}
            </div>
        </Layout>
    );
}