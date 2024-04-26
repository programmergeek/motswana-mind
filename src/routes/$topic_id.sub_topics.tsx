/*
Author: Waseem Mosam
Purpose: This file is used to create the sub-topics page for the user to view the sub-topics available to them.
*/

import { Link, createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
import { useEffect, useState } from 'react';

import Layout from "@/components/layouts/main";
import {
    Card,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

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
            //console.log('SubTopics data:', response.data); // Log fetched data
            setSubtopics(response.data);
        } catch (error) {
            console.error('Error fetching sub-topics:', error);
        }
    };

    return (
        <Layout>
            <div className='flex flex-col items-center justify-center w-full'>
                <h1>Sub-Topics related to Topic ID: {topic_id}</h1>
                {subtopics.map(subtopic => (
                    <Card className='w-11/12 my-3 p-4'>
                        <div key={subtopic.sub_topic_id}>
                            <h2>{subtopic.sub_topic_name}</h2>
                            {/* <Card className='w-11/12 my-3 p-4'> */}
                            <h2>Section Exercise</h2>
                            <Link to="/$sub_topic_id/start_exercise" params={{ sub_topic_id: (subtopic.sub_topic_id) as unknown as string }}>
                                <Button className='float-right'>Take Exercise</Button>
                            </Link>
                            {/* </Card> */}
                        </div>
                    </Card>
                ))}
                <Card className='w-11/12 my-3 p-4'>
                    <Link to="/$topic_id/start_test" params={{ topic_id: (topic_id) as unknown as string }}>
                        <h2>Unit Test</h2>
                        <Button className='float-right'>Take Test</Button>
                    </Link>
                </Card>
            </div>
        </Layout>
    );
}