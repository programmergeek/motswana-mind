/*
Author: Waseem Mosam
Purpose: This file is used to create the sub-topics page for the user to view the sub-topics available to them.
*/

// imports
import { Link, createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";

// interface to store sub topics
interface Sub_Topic {
    sub_topic_id: number;
    sub_topic_name: string;
    topic_id: number;
}

interface Topic {
    topic_name: string;
    topic_desc_1: string;
    topic_desc_2: string;
}

// route to page
export const Route = createFileRoute("/$topic_id/sub_topics")({
    component: SubTopicsPage,
});

function SubTopicsPage() {
    const { topic_id } = Route.useParams() // path parameters

    // state variable
    const [subtopics, setSubtopics] = useState<Sub_Topic[]>([]);
    const [topicDetails, setTopicDetails] = useState<{
        topic_name: string;
        topic_desc_1: string;
        topic_desc_2: string;
    } | null>(null);

    useEffect(() => {
        fetchSubTopicsByTopicId(topic_id);
        fetchTopicName();
    }, [topic_id]);

    // function to fetch sub topics by topic id
    const fetchSubTopicsByTopicId = async (topicId: string) => {
        try {
            const response = await axios.get<Sub_Topic[]>(`http://10.0.19.248:3333/sub_topics/${topicId}`);
            //console.log('SubTopics data:', response.data);
            setSubtopics(response.data);
        } catch (error) {
            console.error('Error fetching sub-topics:', error);
        }
    };

    const fetchTopicName = async () => {
        try {
            const response = await axios.get(`http://10.0.19.248:3333/topic_details/${topic_id}`);
            const responseData = response.data;
            setTopicDetails(responseData[0]);
            console.log(responseData[0]);
        } catch (error) {
            console.error("Error fetching subtopic name:", error);
        }
    };

    return (
        <Layout>
            {/* Display sub topic info */}
            <div className="flex flex-col bg bg-[url('/chalkboard.jpeg')] bg-no-repeat bg-cover text-white ml-12 mt-12 mb-14 p-16 rounded-lg shadow-2xl h-[350px] w-[1250px]">
                <p className="text-2xl font-playfair pb-5">
                    Chapter {topic_id}
                </p>
                <p className="text-4xl font-playfair font-semibold pb-20">
                    {topicDetails?.topic_name}
                </p>
            </div>

            <div className="mx-24">
                <p className="text-2xl font-playfair pb-5 font-semibold">
                    Topic description
                </p>
                <p className="text-xl pb-5">
                    {topicDetails?.topic_desc_1}
                </p>
                <p className="text-xl pb-20">
                    {topicDetails?.topic_desc_2}
                </p>
            </div>
            <div className='flex flex-col items-center justify-center w-full'>

                {subtopics.map(subtopic => (
                    <div className="flex justify-center items-center pb-16">
                        <div className="outline h-[300px] w-[1000px] rounded-3xl shadow-2xl" key={subtopic.sub_topic_id}>
                            <div className="bg-[#BDE283] rounded-t-3xl p-4 border-b-black">
                                <p className="text-lg ml-3">
                                    {subtopic.sub_topic_name}
                                </p>
                            </div>
                            <div className="mt-10 ml-12 flex gap-5">
                                <img
                                    src="/quiz.png"
                                    className="size-12"
                                />
                                {/* Link to exercise */}
                                <Link to="/$sub_topic_id/content" params={{ sub_topic_id: (subtopic.sub_topic_id) as unknown as string }}>
                                    <a className="text-xl pt-2">Video</a>
                                </Link>
                            </div>

                            <div className="mt-10 ml-12 flex gap-5">
                                <img
                                    src="/quiz.png"
                                    className="size-12"
                                />
                                {/* Link to exercise */}
                                <Link to="/$sub_topic_id/start_exercise" params={{ sub_topic_id: (subtopic.sub_topic_id) as unknown as string }}>
                                    <a className="text-xl pt-2">Exercise</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex justify-center items-center pt-5 pb-10">
                    <div className="bg-[#f1f1f1] flex rounded-3xl shadow-2xl w-[800px] p-16">
                        <div>
                            <div className="flex flex-col">
                                <p className="text-2xl pb-5 font-semibold">
                                    Test
                                </p>
                                <div className="flex gap-3 pb-5">
                                    <img
                                        src="/stopwatch.png"
                                        className="size-10"
                                    />
                                    <p className="text-[19px] pt-2">20 minutes</p>
                                </div>
                                <Link to="/$topic_id/start_test" params={{ topic_id: (topic_id) as unknown as string }}>
                                    <Button className="bg-accent">Start</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-96">
                            <img
                                src="/test.png"
                                className="size-32"
                            />
                        </div>
                    </div>
                </div>

            </div>

        </Layout>
    );
}