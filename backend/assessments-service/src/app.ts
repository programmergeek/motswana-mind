/*
Author: Waseem Mosam
Purpose: This file contains the server side code for the MotswanaMind application for the assessments service.
*/

// imports
import express, { Express, Request, Response , Application } from 'express';
import cors from 'cors';
import { Pool, PoolConfig, QueryResult } from 'pg';

// database configuration
const poolConfig: PoolConfig = {
    user: 'root',
    host: '10.0.18.86',
    database: 'motswanamind_db',
    password: 'root',
    port: 5432, // default PostgreSQL port
};


const pool = new Pool(poolConfig); // create a new pool

// query function to execute queries
export const query = async <T extends QueryResult = any>(
    text: string,
    params: any[] = []
): Promise<QueryResult<T>> => {
    const start = Date.now();
    const res = await pool.query<T>(text, params);
    const duration = Date.now() - start;
    //console.log('Executed query:', { text, duration, rows: res.rowCount });
    return res;
};


const app = express(); // create an express application

// middleware
app.use(cors())
app.use(express.json());

//Retrieve Subjects
app.get('/subjects', async (req: Request, res: Response) => {
    try {
        const result: QueryResult = await query('SELECT * FROM public."Subject";');
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching subjects:', error);
        return [];
    }
});

// Retrieve subject name by subject id
app.get('/subject/name/:subject_id', async (req: Request, res: Response) => {

    const subject_id: string = req.params.subject_id;

    try {
        const result: QueryResult = await query(`SELECT subject_name FROM public."Subject" WHERE subject_id = ${subject_id};`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching subject name by subject id:', error);
        return [];
    }
});

// fetch subject details by subject id
app.get('/subject_details/:subject_id', async (req: Request, res: Response) => {

    const subject_id: string = req.params.subject_id;

    try {
        const result: QueryResult = await query(`SELECT subject_banner, subject_message_1, subject_message_2 FROM public."Subject" WHERE subject_id = ${subject_id};`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching subject details by subject id:', error);
        return [];
    }
});


//Retrieve Topics
app.get('/topics', async (req: Request, res: Response) => {
    try {
        const result: QueryResult = await query('SELECT * FROM public."Topic";');
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching topics:', error);
        return [];
    }
});

// Retrieve topics by subject id
app.get('/topics/:subject_id', async (req: Request, res: Response) => {
    const subject_id: string = req.params.subject_id;

    try {
        const result: QueryResult = await query(`SELECT * FROM public."Topic" WHERE subject_id = ${subject_id};`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching topics by subject id:', error);
        return [];
    }
});

// retrieve topic details by topic id
app.get('/topic_details/:topic_id', async (req: Request, res: Response) => {

    const topic_id: string = req.params.topic_id;

    try {
        const result: QueryResult = await query(`SELECT * FROM public."Topic" WHERE topic_id = ${topic_id};`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching topic details by topic id:', error);
        return [];
    }
});


// Retrieve sub topics
app.get('/sub_topics/:topic_id', async (req: Request, res: Response) => {

    const topic_id: string = req.params.topic_id;

    try {
        const result: QueryResult = await query(`SELECT * FROM public."Sub_Topic" WHERE topic_id = ${topic_id};`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching sub topics by topic id:', error);
        return [];
    }
});

// retrieve sub topic names by topic id
app.get('/sub_topic_names', async (req: Request, res: Response) => {

    //const topic_id: string = req.params.topic_id;

    try {
        const result: QueryResult = await query(`SELECT sub_topic_name, topic_id FROM public."Sub_Topic";`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching sub topic names by topic id:', error);
        return [];
    }
});

// Retrieve topic name by topic id
app.get('/topic/name/:topic_id', async (req: Request, res: Response) => {

    const topic_id: string = req.params.topic_id;

    try {
        const result: QueryResult = await query(`SELECT topic_name FROM public."Topic" WHERE topic_id = ${topic_id};`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching topic name by topic id:', error);
        return [];
    }
});

// Retrieve sub topic name by sub topic id
app.get('/sub_topic/name/:sub_topic_id', async (req: Request, res: Response) => {

    const sub_topic_id: string = req.params.sub_topic_id;

    try {
        const result: QueryResult = await query(`SELECT sub_topic_name FROM public."Sub_Topic" WHERE sub_topic_id = ${sub_topic_id};`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching sub topic name by sub topic id:', error);
        return [];
    }
});

// Retrieve sub topic name by question id
app.get('/sub_topic_name/question/:question_id', async (req: Request, res: Response) => {

    const question_id: string = req.params.question_id;

    try {
        const result: QueryResult = await query(`SELECT sub_topic_name FROM public."Sub_Topic" WHERE sub_topic_id = (SELECT sub_topic_id FROM public."Question" WHERE question_id = ${question_id});`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching sub topic name by question id:', error);
        return [];
    }
});

// Retrieve questions
app.get('/questions', async (req: Request, res: Response) => {
    try {
        const result: QueryResult = await query(`SELECT
            q.question_id,
            q.question_text,
            json_agg(
                json_build_object('option_id', o.option_id, 'option_text', o.option_text, 'is_correct', o.is_correct)
            ) AS options
        FROM
            public."Question" q
        JOIN
            public."Options" o ON q.question_id = o.question_id
        WHERE
            q.topic_id = 1
        GROUP BY
            q.question_id, q.question_text;`);
        //console.log(result.rows);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
})

// Retrieve questions by subject id for practice exam
app.get('/questions/exam/:subject_id', async (req: Request, res: Response) => {

    const subject_id: string = req.params.subject_id;

    try {
        const result: QueryResult = await query(`SELECT
                q.question_id,
                q.question_text,
                json_agg(
                    json_build_object('option_id', o.option_id, 'option_text', o.option_text, 'is_correct', o.is_correct)
                ) AS options
            FROM
                public."Question" q
            JOIN
                public."Options" o ON q.question_id = o.question_id
            WHERE
                q.topic_id = 1
            GROUP BY
                q.question_id, q.question_text
            HAVING
                COUNT(o.option_id) >= 3
                ORDER BY RANDOM()
                LIMIT 20;
        `);

        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching questions for practice exam:', error);
        return [];
    }
})

// Retrieve questions by topic id for tests
app.get('/questions/test/:topic_id', async (req: Request, res: Response) => {

    const topic_id: string = req.params.topic_id;

    try {
        const result: QueryResult = await query(`SELECT
                q.question_id,
                q.question_text,
                json_agg(
                    json_build_object('option_id', o.option_id, 'option_text', o.option_text, 'is_correct', o.is_correct)
                ) AS options
            FROM
                public."Question" q
            JOIN
                public."Options" o ON q.question_id = o.question_id
            WHERE
                q.topic_id = ${topic_id} 
            GROUP BY
                q.question_id, q.question_text
            HAVING
                COUNT(o.option_id) >= 3
            ORDER BY RANDOM()
            LIMIT 15;
        `);

        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching questions for test:', error);
        return [];
    }
})

// Retrieve questions by sub topic id for exercises
app.get('/questions/exercise/:sub_topic_id', async (req: Request, res: Response) => {

    const sub_topic_id: string = req.params.sub_topic_id;

    try {
        const result: QueryResult = await query(`SELECT
            q.question_id,
            q.question_text,
            json_agg(
                json_build_object('option_id', o.option_id, 'option_text', o.option_text, 'is_correct', o.is_correct)
            ) AS options
        FROM
            public."Question" q
        JOIN
            public."Options" o ON q.question_id = o.question_id
        WHERE
            q.sub_topic_id = ${sub_topic_id} 
        GROUP BY
            q.question_id, q.question_text
        HAVING
            COUNT(o.option_id) = 1;`);

        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching questions for exercises:', error);
        return [];
    }
})

// Retrieve short answer questions with only one option
app.get('/questions/shortanswer', async (req: Request, res: Response) => {

    try {
        const result: QueryResult = await query(`SELECT
            q.question_id,
            q.question_text,
            json_agg(
                json_build_object('option_id', o.option_id, 'option_text', o.option_text, 'is_correct', o.is_correct)
            ) AS options
        FROM
            public."Question" q
        JOIN
            public."Options" o ON q.question_id = o.question_id
        WHERE
            q.topic_id = 1
        GROUP BY
            q.question_id, q.question_text
        HAVING
            COUNT(o.option_id) = 1;
        `);

        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching shortanswer questions:', error);
        return [];
    }
})

// Store assessment results
app.post('/assessment_results', async (req: Request, res: Response) => {

    const { assessment_name, assessment_type, user_id, score, date_taken} = req.body;

    try {
        const result: QueryResult = await query(`INSERT INTO public."Assessment" (assessment_name, assessment_type, user_id, score, date_taken) VALUES ('${assessment_name}', '${assessment_type}', ${user_id}, ${score}, '${date_taken}');`);
        res.send(201);
    } catch (error) {
        console.error('Error storing assessment results:', error);
        return [];
    }
})

// Progress page information
app.get('/progress/:user_id', async (req: Request, res: Response) => {
    const user_id: string = req.params.user_id;

    try {
        const result: QueryResult = await query(`SELECT
            a.assessment_id,
            a.assessment_name,
            a.assessment_type,
            a.score,
            a.date_taken
        FROM
            public."Assessment" a
        WHERE
            a.user_id = ${user_id}
            AND a.assessment_type IN ('Test', 'Exam');`);

        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching progress information:', error);
        return [];
    }
});

// retrieve user's fullname by user id
app.get('/users/name/:user_id', async (req: Request, res: Response) => {

    const user_id: string = req.params.user_id;

    try {
        const result: QueryResult = await query(`SELECT fullname FROM public."User" WHERE id = ${user_id};`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching user name by user id:', error);
        return [];
    }
});

// compute average score for a user
app.get('/average_score/:user_id', async (req: Request, res: Response) => {
    const user_id: string = req.params.user_id;

    try {
        const result: QueryResult = await query(`SELECT AVG(score) FROM public."Assessment" WHERE user_id = ${user_id} AND assessment_type IN ('Test', 'Exam');`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching average score:', error);
        return [];
    }
});

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});

export default app;
