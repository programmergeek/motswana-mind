/*
Author: Waseem Mosam
Purpose: This file is used to create the subjects page for the user to view the subjects available to them.
*/

// imports
import { Link, createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
// interface to store subjects
interface Subject {
    subject_id: number;
    subject_name: string;
}

// route to page
export const Route = createFileRoute("/my_subjects")({
    component: Subjects,
});

function Subjects() {
    // state variables
    const [subjects, setSubjects] = useState<Subject[]>([]);

    useEffect(() => {
        fetchSubjects();
    }, []);

    // function to fetch subjects
    const fetchSubjects = async () => {
        try {
            const response = await axios.get<Subject[]>('http://localhost:3333/subjects');
            setSubjects(response.data);
            //console.log(response.data);
        } catch (error) {
            console.error('Error fetching subjects:', error);
        }
    };

    return (
        <div className="flex flex-row gap-5 items-center mt-3 ml-3" >
            {subjects.map(subject => (
                <div key={subject.subject_id}>
                    <Card className="rounded-[30px] shadow-2xl">
                        <CardHeader>
                            <img
                                src="/math thumbnail.png"
                                className="size-44 rounded-t-[30px]"
                            />
                        </CardHeader>
                        <CardContent className="">
                            <p>{subject.subject_name}</p>
                        </CardContent>
                        <CardFooter>
                            <Link to="/$subject_id/my_topics" params={{ subject_id: (subject.subject_id) as unknown as string }}>
                                <Button>View</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Subjects;