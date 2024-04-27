/*
Author: Waseem Mosam
Purpose: This file is used to create the test page for the user to complete the test.
*/

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";

import Layout from "@/components/layouts/main";



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

export const Route = createFileRoute('/$topic_id/start_test')({
    component: Quiz,
});

function Quiz() {

    const { topic_id } = Route.useParams()

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
    const [topicName, setTopicName] = useState<string>("");

    const [incorrectSubtopics, setIncorrectSubtopics] = useState<Set<string>>(new Set());


    useEffect(() => {
        fetchTopicName();
        fetchQuestions();
        if (quizStarted) {
            startTimer();
        }
    }, [quizStarted]);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get(`http://localhost:3333/questions/test/${topic_id}`);
            const responseData = response.data as Question[]; // Type assertion
            setQuestions(responseData);
            //console.log(responseData);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const fetchTopicName = async () => {
        try {
            const response = await axios.get(`http://localhost:3333/topic/name/${topic_id}`);
            const responseData = response.data;
            setTopicName(responseData[0].topic_name);
            //console.log(topicName);
        } catch (error) {
            console.error("Error fetching subtopic name:", error);
        }
    };



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

    const handleSubmitQuiz = async () => {
        // Grade the user's input
        if (timer) {
            clearInterval(timer); // Stop the timer when quiz is submitted
        }
        let userScore = 0;

        const incorrectSubtopics = new Set<string>();

        for (const question of questions) {
            const userAnswer = answers[question.question_id];
            const correctOption = question.options.find(option => option.is_correct);
            if (userAnswer !== null && correctOption && userAnswer === correctOption.option_id) {
                userScore++;
            } else {
                const response = await axios.get(`http://localhost:3333/sub_topic_name/question/${question.question_id}`);
                const subtopicName = response.data[0].sub_topic_name;
                //console.log(response.data[0].sub_topic_name)
                incorrectSubtopics.add(subtopicName);
                //console.log(subtopicName);
            }
        }
        setScore(userScore);
        setQuizSubmitted(true);
        setIncorrectSubtopics(incorrectSubtopics);
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

    const formatTime = (seconds: number | null): string => {
        if (seconds === null) return '00:00';

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <Layout>
            <div className="pt-10 flex-row items-center justify-center bg-[url(/pattern.jpeg)]">
                {!quizStarted && !quizSubmitted && (
                    <Card className="w-7/12 max-w-6xl mx-auto my-14 bg-gray-200">
                        <CardHeader className="mb-4 md:mb-6">
                            <div className="flex justify-between items-center">
                                <h2 className="ml-2 text-2xl md:text-2xl font-bold">{topicName} Test</h2>
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
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">Test</h3>

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
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">{timeLimit}</h3>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="mt-4 md:mt-6 flex justify-end">
                            <Button onClick={handleStartQuiz} className="h-12 w-22">Start Test</Button>
                        </CardFooter>
                    </Card>
                )}
                {quizStarted && !quizSubmitted && (
                    <>
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
                                            <div className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                <span className="font-bold">{formatTime(timeLeft)}</span>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">{questions[currentQuestionIndex].question_text}</h2>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <ul>
                                                    {questions[currentQuestionIndex].options.map(option => (
                                                        <li key={option.option_id}>
                                                            <input
                                                                className="h-4 w-4 text-gray-900 focus:ring-gray-900 dark:text-gray-800 dark:focus:ring-gray-800"
                                                                type="radio"
                                                                name={`question_${questions[currentQuestionIndex].question_id}`}
                                                                id={`option_${option.option_id}`}
                                                                value={option.option_id}
                                                                onChange={() =>
                                                                    handleAnswerChange(
                                                                        questions[currentQuestionIndex].question_id,
                                                                        option.option_id
                                                                    )
                                                                }
                                                                checked={
                                                                    answers[questions[currentQuestionIndex].question_id] ===
                                                                    option.option_id
                                                                }
                                                            />
                                                            <label className="ml-2  text-sm font-medium text-gray-900 dark:text-gray-200" htmlFor={`option_${option.option_id}`}>
                                                                {option.option_text}
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                        </div>
                                        <div className="flex gap-4 mt-6">
                                            <Button onClick={handleBack} disabled={currentQuestionIndex === 0}>Back</Button>
                                            <Button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</Button>
                                            <Button onClick={handleSubmitQuiz} className="ml-auto">Submit</Button>
                                        </div>
                                    </div>
                                </Card>
                            </>
                        )}
                    </>
                )}
                {quizSubmitted && (
                    <Card className="my-5 p-10 w-6/12 bg-gray-200 mx-auto">
                        <div>
                            <h1 className="ml-3 text-xl md:text-2xl font-bold mb-4">Results - {topicName} Test</h1>
                            <div>
                                <Card className="p-4 my-3">
                                    <p className="text-dark-500 dark:text-gray-400 mb-2 font-bold">Test Score:</p>
                                    <p className="text-gray-600 dark:text-gray-400 mb-2">{score} out of {totalQuestions} ({roundedPercentage})</p>
                                </Card>
                            </div>
                            <div>
                                <Card className="p-4">
                                    <p className="text-dark-500 dark:text-gray-400 mb-2 font-bold">Revision Recommendations:</p>
                                    <ul>
                                        {[...incorrectSubtopics].map((subtopic, index) => (
                                            <li key={index}><p className="text-gray-600 dark:text-gray-400 mb-2">- {subtopic}</p></li>
                                        ))}
                                    </ul>
                                </Card>
                            </div>
                            <div>
                                <Button onClick={handleRestartQuiz} className="my-5 mr-4">Restart Test</Button>
                                <Button onClick={() => setShowAnswers(!showAnswers)} className="my-5 mr-4">Toggle Answers</Button>
                            </div>
                            {showAnswers && (
                                <>
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 md:p-8">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Review</h2>
                                    {questions.map(question => (
                                        <div key={question.question_id} className="space-y-4 pb-4">
                                            <h3 className="text-xl md:text-2xl font-bold mb-2">{question.question_text}</h3>
                                            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
                                            <p className="text-gray-500 dark:text-gray-400 mb-2">
                                                Correct Answer: <span className="font-medium text-gray-700 dark:text-gray-300">{question.options.find(option => option.is_correct)?.option_text}
                                                {question.options.find(option => option.is_correct) && <span> </span>}</span>
                                            </p>
                                            </div>
                                            <ul className="space-y-2">
                                                {question.options.map(option => (
                                                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
                                                    <li key={option.option_id}>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-gray-700 dark:text-gray-300">{option.option_text}</span>
                                                        {answers[question.question_id] === option.option_id && <span className="font-medium text-gray-700 dark:text-gray-300"> Your answer</span>}
                                                    </div>
                                                    </li>
                                                    </div>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </Card>
                )}
            </div>
        </Layout>
    );

}