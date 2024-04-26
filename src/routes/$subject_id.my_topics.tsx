/*
Author: Waseem Mosam
Purpose: This file is used to create the topics page for the user to view the topics available to them.
*/

import { Link, createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
import { useEffect, useState } from 'react';

import {
    Card,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import Layout from "@/components/layouts/main";
interface Topic {
    topic_id: number;
    topic_name: string;
}

export const Route = createFileRoute("/$subject_id/my_topics")({
    component: TopicsPage,
});

function TopicsPage() {
    const { subject_id } = Route.useParams()
    //console.log('subject_id:', subject_id);
    const [topics, setTopics] = useState<Topic[]>([]);

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = async () => {
        try {
            const response = await axios.get<Topic[]>(`http://localhost:3333/topics/${subject_id}`);
            //console.log('Topics data:', response.data); // Log fetched data
            setTopics(response.data);
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    };

    //console.log('Topics state:', topics); // Log topics state

    return (
        <Layout>
            <div className='flex justify-center pt-10'>
                <img src="/math.jpeg" alt="math banner" className='w-11/12 rounded-lg'/>
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
                <h1>Topics</h1>
                {topics.map(topic => (
                    <Card className='w-11/12 my-3 p-4'>

                    <div key={topic.topic_id}>
                        <h2>{topic.topic_name}</h2>
                        <Link to="/$topic_id/sub_topics" params={{ topic_id : (topic.topic_id) as unknown as string }}>
                            <Button className='float-right'>Start</Button>
                        </Link>
                    </div>
                    </Card>
                ))}
                <Card className='w-11/12 my-3 p-4'>
                    <h2>Practice Examination</h2>
            <Link to="/$subject_id/start_exam" params={{ subject_id : (subject_id) as unknown as string }}>
                <Button className='float-right'>Take Practice Exam</Button>
            </Link>
            </Card>
            </div>
        </Layout>
    );
}