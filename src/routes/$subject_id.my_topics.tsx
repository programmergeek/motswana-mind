/*
Author: Waseem Mosam
Purpose: This file is used to create the topics page for the user to view the topics available to them.
*/

// imports
import { Link, createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layouts/main";

// interface to store topics
interface Topic {
    topic_id: number;
    topic_name: string;
    topic_image: string;
}

// route to page
export const Route = createFileRoute("/$subject_id/my_topics")({
    component: TopicsPage,
});

function TopicsPage() {
    const { subject_id } = Route.useParams() // path parameter

    // state variables
    const [topics, setTopics] = useState<Topic[]>([]); 
    //const [subtopicNames, setSubtopicNames] = useState<{ [topicId: string]: string }>({});

    useEffect(() => {
        fetchTopics();
    }, []);

    // function to fetch topic names
    const fetchTopics = async () => {
        try {
            const response = await axios.get<Topic[]>(`http://localhost:3333/topics/${subject_id}`);
            setTopics(response.data);
            //fetchSubtopicNames(response.data);
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    };

    // const fetchSubtopicNames = async (topics: Topic[]) => {
    //     const names: { [topicId: string]: string } = {};
    //     for (const topic of topics) {
    //         try {
    //             const response = await axios.get<string>(`http://localhost:3333/sub_topic_names/${topic.topic_id}`);
    //             const responseData = response.data;
    //             names[topic.topic_id] = responseData[0];
    //         } catch (error) {
    //             console.error(`Error fetching subtopic name for topic ${topic.topic_id}:`, error);
    //             names[topic.topic_id] = ''; // Set an empty string or handle the error as needed
    //         }
    //     }
    //     setSubtopicNames(names);
    // };

    // console.log('subtopicNames:', subtopicNames)

    return (
        <Layout>
            {/* Display general info about subject */}
            <div className='mt-12 ml-32'>
                <img src="/math.png" className="h-[400px] w-[1100px] rounded-3xl shadow-2xl" />
            </div>
            <div className='flex flex-col justify-center items-center pl-40 pr-52 pt-24 pb-16'>
                <p className="text-5xl font-semibold">
                    Explore the mathematics curriculum carefully curated for you
                </p>
                <p className='text-2xl mt-10'>
                    jdisdakahxskchkskjjjjjjjjjjhcksbcjbsckasbcjishi
                    sjcgscsjkcbjkshcksnckshcnskcnkshcksckshcksckscskcs
                    xjhvsjbsjbijskjsbkxnaskxisksbkasxbskblasx
                    sjcbskbsuicjksbishcksbksx
                    jcvsjcjscbkshksckshcoscss
                </p>
            </div>
            {/* Display subject topics */}
            <div className='flex flex-col justify-center items-center pb-16'>
                {topics.map((topic, index) => (

                    <div className="bg-[#FF56C2] p-16 rounded-3xl shadow-2xl w-[70%] my-4">
                        <div className="flex gap-3">

                            <div key={topic.topic_id}>
                                <img src={topic.topic_image} alt="Numbers" className="h-10" />
                            </div>
                            <div key={topic.topic_id}>
                                <p className="text-xl"><span className="font-bold text-white">Chapter {index+1}</span> {topic.topic_name}</p>
                            </div>

                            <div className='ml-auto'>
                                <Link to="/$topic_id/sub_topics" params={{ topic_id: (topic.topic_id) as unknown as string }}>
                                    <Button className=''>Start</Button>
                                </Link>
                            </div>
            
                        </div>
                    </div>
                ))}
            </div>




                <Card className='w-11/12 my-3 p-4'>
                    <h2>Practice Examination</h2>
                    <Link to="/$subject_id/start_exam" params={{ subject_id: (subject_id) as unknown as string }}>
                        <Button className='float-right'>Take Practice Exam</Button>
                    </Link>
                </Card>
        </Layout>
    );
}