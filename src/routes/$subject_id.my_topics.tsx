/*
Author: Waseem Mosam
Purpose: This file is used to create the topics page for the user to view the topics available to them.
*/

// imports
import { Link, createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Layout from "@/components/layouts/main";

// interface to store topics
interface SubTopic {
    sub_topic_name: string;
    topic_id: string;
}

interface Topic {
    topic_id: number;
    topic_name: string;
    topic_image: string;
    subtopicNames: string[]; // Assuming subtopic names are stored as an array of strings
}

interface SubjectDetails {
    subject_banner: string;
    subject_message_1: string;
    subject_message_2: string;
}

// route to page
export const Route = createFileRoute("/$subject_id/my_topics")({
    component: TopicsPage,
});

function TopicsPage() {
    const { subject_id } = Route.useParams() // path parameter

    // state variables
    const [topics, setTopics] = useState<Topic[]>([]);
    const [subTopics, setSubTopics] = useState<{ [topicId: string]: string[] }>({});
    const [subjectDetails, setSubjectDetails] = useState<{
        subject_banner: string;
        subject_message_1: string;
        subject_message_2: string;
    } | null>(null);

    useEffect(() => {
        fetchTopics();
        fetchSubjectDetails();
    }, []);

    // function to fetch topic names
    const fetchTopics = async () => {
        try {
            const response = await axios.get<Topic[]>(`http://localhost:3333/topics/${subject_id}`);
            setTopics(response.data);
            await fetchSubTopics();
            //fetchSubtopicNames(response.data);
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    };

    // fetch all sub topic names and their topic IDs
    const fetchSubTopics = async () => {
        try {
            const response = await axios.get('http://localhost:3333/sub_topic_names');
            const subTopicsData: SubTopic[] = response.data;
            const subTopicsMap: { [topicId: string]: string[] } = {};
            subTopicsData.forEach(subTopic => {
                if (!subTopicsMap[subTopic.topic_id]) {
                    subTopicsMap[subTopic.topic_id] = [];
                }
                subTopicsMap[subTopic.topic_id].push(subTopic.sub_topic_name);
            });
            setSubTopics(subTopicsMap);
        } catch (error) {
            console.error('Error fetching subtopics:', error);
        }
    };

    const fetchSubjectDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3333/subject_details/${subject_id}`);
            console.log('Subject details:', response.data);
            setSubjectDetails(response.data[0]); // Assuming there's only one set of details
        } catch (error) {
            console.error('Error fetching subject details:', error);
        }
    };

    return (
        <Layout>
            {/* Display general info about subject */}
            <div className='mt-12 grid place-items-center'>
                <img src={subjectDetails?.subject_banner} className="h-[400px] w-[1100px] rounded-3xl shadow-2xl" />
            </div>
            <div className='flex flex-col justify-center items-center pl-40 pr-52 pt-24 pb-16'>
                <p className="text-5xl font-semibold">
                    {subjectDetails?.subject_message_1}
                </p>
                <p className='text-2xl mt-10'>
                    {subjectDetails?.subject_message_2}
                </p>
            </div>
            {/* Display subject topics */}
            <div className='flex flex-col justify-center items-center pb-16'>
                {topics.map((topic, index) => (

                    <div className="bg-[#BDE283] p-16 rounded-3xl shadow-2xl w-[70%] my-4" key={topic.topic_id}>
                        <div className="flex gap-3">

                            <div>
                                <img src={topic.topic_image} alt="Numbers" className="h-10" />
                            </div>
                            <div>
                                <p className="text-xl"><span className="font-bold text-white">Chapter {index + 1}</span> {topic.topic_name}</p>
                                <ul className='pt-4'>
                                    {subTopics[topic.topic_id]?.map((subTopicName, idx) => (
                                        <li key={idx}>- {subTopicName}</li>
                                    ))}
                                </ul>
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


            <div className="pt-10">
                <div className="flex justify-center items-center pb-4">
                    <img
                        src="/exam_time.png"
                        className="h-[100px] w-[300px]"
                    />
                </div>
                <p className="text-xl pb-5 text-center mx-60">
                    Take this exam to assess your skill on the various concepts from
                    the curriculum. Covering everything you learnt from the chapters.
                </p>

                <div className="flex justify-center items-center pt-5 pb-16">
                    <div className="bg-[#f1f1f1] flex rounded-3xl shadow-2xl w-[800px] p-16">
                        <div>
                            <div className="flex flex-col">
                                <p className="text-2xl pb-5 font-semibold">
                                    Exam
                                </p>
                                <p className="text-[19px] pb-5">Multiple choice</p>
                                <Link to="/$subject_id/start_exam" params={{ subject_id: (subject_id) as unknown as string }}>
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