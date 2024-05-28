const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const getYoutubeID = require('get-youtube-id');


const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'root',
    host: '10.0.18.86',
    database: 'motswanamind_db',
    password: 'root',
    port: 5432, // default PostgreSQL port
});

app.get('/users', (req, res) => {
    pool.query('SELECT * FROM public."Topic"', (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result.rows);
        }
    });
});

// retrieve all content
app.get('/content/:sub_topic_id', (req, res) => {

    const sub_topic_id = req.params.sub_topic_id;

    pool.query(`SELECT * FROM public."Content" WHERE sub_topic_id = ${sub_topic_id}`, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result.rows);
        }
    });
});

app.get("/hello", (req, res) =>{
    const id = getYoutubeID("https://youtu.be/hFubXXE0-bc");
    res.send(id);
})

app.listen(4444, () => {
  console.log('Server is running on port 4444');
});

