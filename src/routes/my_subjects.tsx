import { Link, createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from "@/components/layouts/main";

interface Subject {
    subject_id: number;
    subject_name: string;
}

export const Route = createFileRoute("/my_subjects")({
    component: Subjects,
  });

function Subjects() {
    const [subjects, setSubjects] = useState<Subject[]>([]);

    useEffect(() => {
        fetchSubjects();
    }, []);

    const fetchSubjects = async () => {
        try {
            const response = await axios.get<Subject[]>('http://localhost:3333/subjects');
            setSubjects(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching subjects:', error);
        }
    };

    return (
        <Layout>
            <div>
                <h1>Subjects</h1>
                {subjects.map(subject => (
                    <div key={subject.subject_id}>
                        <h2>{subject.subject_name}</h2>
                        <Link to="/$subject_id/my_topics" params={{ subject_id : (subject.subject_id) as unknown as string }}>
                            <button>View More Information</button>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
}