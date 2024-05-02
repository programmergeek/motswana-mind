import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "@/components/layouts/main";
//import EmbeddedPDF from '@/components/custom/pdf';


export const Route = createFileRoute("/$sub_topic_id/content")({
    component: VideoContent,
});

interface Content{
    content_id: number;
    content_video: string;
    content_article: string;
    topic_id: number;
    sub_topic_id: number;
}

function VideoContent(){
    const { sub_topic_id } = Route.useParams(); //path parameter

    const [content, setContent] = useState<Content[]>([]);

    useEffect(() => {
        contentDetails();
    }, []);


    const contentDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:4444/content/${sub_topic_id}`);
            const responseData = response.data as Content[]; // Type assertion
            console.log(responseData)
            setContent(response.data);

            //console.log(responseData);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    console.log(content[0]);

    return(
        <Layout>
            

            <div className="video-responsive flex justify-center items-center rounded-3xl py-24">
                {/* Assuming you want to render the first video in the content array */}
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${content.length > 0 ? content[0].content_video : ''}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </Layout>
    );
}