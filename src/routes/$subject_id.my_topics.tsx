import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Topic {
    topic_id: number;
    topic_name: string;
}

export const Route = createFileRoute("/$subject_id/my_topics")({
    component: TopicsPage,
});

function TopicsPage() {
    const { subject_id } = Route.useParams()
    console.log('subject_id:', subject_id);
    const [topics, setTopics] = useState<Topic[]>([]);

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = async () => {
        try {
            const response = await axios.get<Topic[]>(`http://localhost:3333/topics/${subject_id}`);
            console.log('Topics data:', response.data); // Log fetched data
            setTopics(response.data);
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    };

    console.log('Topics state:', topics); // Log topics state

    return (
        <div>
            <h1>Topics</h1>
            {topics.map(topic => (
                <div key={topic.topic_id}>
                    <h2>{topic.topic_name}</h2>
                    {/* <Link to={`/topics/${topic.topic_id}`}>
                        <button>View More Information</button>
                    </Link> */}
                </div>
            ))}
        </div>
    );
}