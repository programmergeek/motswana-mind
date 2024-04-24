import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';

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


export const Route = createFileRoute("/$sub_topic_id/start_exercise")({
  component: Quiz,
});

function Quiz() {
    const { sub_topic_id } = Route.useParams();

    const [questions, setQuestions] = useState<Question[]>([]);
    const [answers, setAnswers] = useState<{ [questionId: number]: string }>({});
    const [score, setScore] = useState<number | null>(null);
    const [quizStarted, setQuizStarted] = useState<boolean>(false);
    const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
    const [showAnswers, setShowAnswers] = useState<boolean>(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [shortAnswer] = useState<boolean>(true);

    useEffect(() => {
        if (quizStarted) {
            fetchQuestions();
        }
    }, [quizStarted]);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get(`http://localhost:3333/questions/exercise/${sub_topic_id}`);
            const responseData = response.data as Question[];
            setQuestions(responseData);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const handleStartQuiz = () => {
        setQuizStarted(true);
    };

    const handleAnswerChange = (questionId: number, value: string) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: value,
        }));
    };

    const handleBack = () => {
        setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, questions.length - 1));
    };

    const handleSubmitQuiz = () => {
        let userScore = 0;
        questions.forEach(question => {
            const userAnswer = (answers[question.question_id]).trim();
            const correctAnswer = (question.options[0].option_text).trim();

			if(/^\d*\.?\d+$/.test(correctAnswer)){
				let answer = Number(userAnswer);
				let correct = Number(correctAnswer);
				if(answer === correct){
					userScore++;
				}
			}else{
				if(userAnswer === correctAnswer){
					userScore++;
				}
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
        setShowAnswers(false);
		setCurrentQuestionIndex(0);
    };

    return (
		<Layout>
			<div>
				<h1>Quiz</h1>
				{!quizStarted && !quizSubmitted && (
					<button onClick={handleStartQuiz}>Start Quiz</button>
				)}
				{quizStarted && !quizSubmitted && (
					<>
						{questions.length === 0 ? (
							<p>Loading...</p>
						) : (
							<>
								<div key={questions[currentQuestionIndex].question_id}>
									<h2>{questions[currentQuestionIndex].question_text}</h2>
									<input
										type="text"
										placeholder="Enter your answer"
										value={answers[questions[currentQuestionIndex].question_id] || ''}
										onChange={(e) => handleAnswerChange(questions[currentQuestionIndex].question_id, e.target.value)}
									/>
								</div>
								{currentQuestionIndex > 0 && (
									<button onClick={handleBack}>Back</button>
								)}
								{currentQuestionIndex === questions.length - 1 && (
									<button onClick={handleSubmitQuiz}>Submit Quiz</button>
								)}
								{currentQuestionIndex < questions.length - 1 && (
									<button onClick={handleNext}>Next</button>
								)}

							</>
						)}
					</>
				)}
				{quizSubmitted && (
					<div>
						<h2>Quiz Score: {score}</h2>
						<button onClick={handleRestartQuiz}>Restart Quiz</button>
						<button onClick={() => setShowAnswers(!showAnswers)}>Toggle Answers</button>
						{showAnswers && (
							<>
							<h2>Review Answers:</h2>
							{questions.map(question => (
								<div key={question.question_id}>
									<h3>{question.question_text}</h3>
									{shortAnswer ? ( // Display the correct answer for short answer questions
										<>
											<p>Correct Answer: {question.options[0].option_text}</p>
											<p>User's Answer: {answers[question.question_id]}</p>
										</>
									) : null} {/* Do not display for multiple-choice questions */}
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



