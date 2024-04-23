import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';

//import Layout from "@/components/layouts/main";

export const Route = createFileRoute("/assessment_overview")({
    component: QuizTopics,
});

interface QuizTopic {
    id: number;
    name: string;
    numQuestions: number;
}

function QuizTopics() {
    const [quizTopics, setQuizTopics] = useState<QuizTopic[]>([]);

    useEffect(() => {
        fetchQuizTopics();
    }, []);

    const fetchQuizTopics = async () => {
        try {
            const response = await axios.get<QuizTopic[]>('http://localhost:3333/quiz-topics');
            setQuizTopics(response.data);
        } catch (error) {
            console.error('Error fetching quiz topics:', error);
        }
    };

    return (
        
        <div>
            <h1>Choose a Quiz Topic</h1>
            {quizTopics.map(topic => (
                <div key={topic.id}>
                    <h2>{topic.name}</h2>
                    <p>Number of Questions: {topic.numQuestions}</p>
                    <Link to="/start_assessment">
                        <button>Go to Assessment</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}


