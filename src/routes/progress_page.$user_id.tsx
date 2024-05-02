/*
Author: Waseem Mosam
Purpose: this page is used to display user's progress when it comes to assessments
*/

// imports
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "@/components/layouts/main";
import {
    Card
} from "@/components/ui/card";

// interface to store assessment results
interface Result {
    assessment_id: number;
    assessment_name: string;
    assessment_type: string;
    score: number;
    date_taken: string;
}


// route to page
export const Route = createFileRoute('/progress_page/$user_id')({
    component: ProgressPage,
});

function ProgressPage(){

    const { user_id } = Route.useParams() //path parameter
    const [results, setResults] = useState<Result[]>([]);
    const [username, setUsersName] = useState<string>("");
    const [averageScore, setAverageScore] = useState<number | null>(null);

    useEffect(() => {
        fetchResults();
        fetchUserName();
        fetchAverageScore();
    }, []);
    
    // function to fetch results from DB
    const fetchResults = async () => {
        try {
            const response = await axios.get(`http://localhost:3333/progress/${user_id}`);
            const responseData = response.data as Result[]; // Type assertion
            setResults(responseData);
            //console.log(responseData);
        } catch (error) {
            console.error('Error fetching results:', error);
        }
    };

    // function to fetch user's fullname by their user id
    const fetchUserName = async () => {
    	try {
    		const response = await axios.get(`http://localhost:3333/users/name/${user_id}`);
    		const responseData = response.data;
    		setUsersName(responseData[0].fullname);
    	} catch (error) {
    		console.error("Error fetching user's name:", error);
    	}
    };

    // function to fetch user's average score
    const fetchAverageScore = async () => {
    	try {
    		const response = await axios.get(`http://localhost:3333/average_score/${user_id}`);
    		const responseData = response.data;
    		setAverageScore(Math.round(responseData[0].avg));
    	} catch (error) {
    		console.error("Error fetching average score:", error);
    	}
    };

    // function to format date in dd-mm-yyyy
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return(
        <Layout>
            <div className="flex pt-10 bg-[url(/pattern.jpeg)]">
                <Card className="container mx-auto px-4 py-12 md:px-6 lg:px-8 w-[70%] bg-white my-10">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-black-600 dark:text-black-400">{username}</h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400">Progress Report</p>
                    </div>
                    <div className="grid gap-6">
                        {/* Diplays each assessment taken by the user */}
                        {results.map((result, index) => (
                            <ul key={index}>
                                <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-600 dark:text-black-400">{result.assessment_name}</h3>
                                            <p className="text-gray-500 dark:text-gray-400">{result.assessment_type}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xl font-bold text-black-600 dark:text-black-400">{result.score}</p>
                                            <p className="text-gray-500 dark:text-gray-400">{formatDate(result.date_taken)}</p>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        ))}
                        <div className="rounded-lg border-double border-8 bg-white p-6 shadow-sm dark:border-black-800 dark:bg-black-950">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-black-600 dark:text-black-400">Student's Average Score:</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-black-600 dark:text-black-400">{averageScore}</p>                
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
    );
}

export default ProgressPage;

export default ProgressPage;