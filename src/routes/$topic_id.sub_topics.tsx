import { Link, createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
import { useEffect, useState } from 'react';

import Layout from "@/components/layouts/main";

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
        <Layout>
            <div>
                <h1>Sub-Topics related to Topic ID: {topic_id}</h1>
                {subtopics.map(subtopic => (
                    <div key={subtopic.sub_topic_id}>
                        <h2>{subtopic.sub_topic_name}</h2>
                        <Link to="/$sub_topic_id/start_exercise" params={{ sub_topic_id : (subtopic.sub_topic_id) as unknown as string }}>
                            <button>Start</button>
                        </Link>
                    </div>
                ))}

                <Link to="/$topic_id/start_test" params={{ topic_id : (topic_id) as unknown as string }}>
                    <h2>Test</h2>
                    <button>Start</button>
                </Link>

            </div>
        </Layout>
    );
}