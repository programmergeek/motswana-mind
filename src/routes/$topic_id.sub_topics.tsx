import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Sub_Topic {
    sub_topic_id: number;
    sub_topic_name: string;
    topic_id: number;
}

export const Route = createFileRoute("/$topic_id/sub_topics")({
    component: SubTopicsPage,
});

function SubTopicsPage() {
    const { topic_id } = Route.useParams()
    const [subtopics, setSubtopics] = useState<Sub_Topic[]>([]);

    useEffect(() => {
        fetchSubTopicsByTopicId(topic_id);
    }, [topic_id]);

    const fetchSubTopicsByTopicId = async (topicId: string) => {
        try {
            const response = await axios.get<Sub_Topic[]>(`http://localhost:3333/sub_topics/${topicId}`);
            console.log('SubTopics data:', response.data); // Log fetched data
            setSubtopics(response.data);
        } catch (error) {
            console.error('Error fetching sub-topics:', error);
        }
    };

    return (
        <div>
            <h1>Sub-Topics related to Topic ID: {topic_id}</h1>
            {subtopics.map(subtopic => (
                <div key={subtopic.sub_topic_id}>
                    <h2>{subtopic.sub_topic_name}</h2>
                </div>
            ))}
        </div>
    );
}