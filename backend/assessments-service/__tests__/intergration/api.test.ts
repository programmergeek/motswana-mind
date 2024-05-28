// import modules
import request from 'supertest';
import app from '../../src/app';


// test 1
describe('GET /subjects', () => {
  it('should return a list of subjects', async () => {
    const response = await request(app).get('/subjects'); // sends a GET request to the endpoint

    expect(response.status).toBe(200); // expect the response to be 200 indicating success

    expect(Array.isArray(response.body)).toBe(true); // the response body should be an array of objects
  });
});

// test 2
describe('GET /topics/:subject_id', () => {
  it('should return topics for a valid subject ID', async () => {
    const subjectId = '1'; // specify a valid subject ID that has topics
    const response = await request(app)
      .get(`/topics/${subjectId}`);

    expect(response.status).toBe(200); // expect a status code of 200 indicating success
    expect(Array.isArray(response.body)).toBe(true); // response should be array of objects
  });

  it('should return an empty array for an invalid subject ID', async () => {
    const subjectId = '999'; // specify an invalid subject ID
    const response = await request(app)
      .get(`/topics/${subjectId}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(0); // expect an empty array
  });

  it('should return an empty array if no topics are found for the subject ID', async () => {
    const subjectId = '2'; // specify a valid subject ID which has no topics
    const response = await request(app)
      .get(`/topics/${subjectId}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(0); // expect an empty array
  });
});

// test 3
describe('GET /sub_topic_names', () => {
  it('should return subtopic names with topic_id', async () => {
    const response = await request(app)
      .get('/sub_topic_names');

    expect(response.status).toBe(200); // expect a status code of 200 indicating success
    expect(Array.isArray(response.body)).toBe(true); // response should be array of objects
    expect(response.body.every((subTopic: any) => {
      return subTopic.hasOwnProperty('sub_topic_name') && subTopic.hasOwnProperty('topic_id');
    })).toBe(true);
  });
});

//test 4
describe('GET /questions/test/:topic_id', () => {
  it('should return questions for the specified topic ID', async () => {
    const topicId = '1'; // specify a valid topic ID
    const response = await request(app)
      .get(`/questions/test/${topicId}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    // expected values for the response
    response.body.forEach((question: any) => {
      expect(question).toHaveProperty('question_id');
      expect(question).toHaveProperty('question_text');
      expect(Array.isArray(question.options)).toBe(true);
      question.options.forEach((option: any) => {
        expect(option).toHaveProperty('option_id');
        expect(option).toHaveProperty('option_text');
        expect(option).toHaveProperty('is_correct');
      });
    });
  });

  it('should handle errors well', async () => {
    const topicId = '999'; // specify an invalid topic ID
    const response = await request(app)
      .get(`/questions/test/${topicId}`);

    // status code of 200 expected with empty array
    expect(response.status).toBe(200); 
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(0);
  });
});

// test 5
describe('GET /progress/:user_id', () => {
  it('should return progress information for the specified user ID', async () => {
    const userId = '1'; // Specify a valid user ID
    const response = await request(app)
      .get(`/progress/${userId}`);

    expect(response.status).toBe(200); // Expect a status code of 200 indicating success
    expect(Array.isArray(response.body)).toBe(true);
    // expected values for the response
    response.body.forEach((assessment: any) => {
      expect(assessment).toHaveProperty('assessment_id');
      expect(assessment).toHaveProperty('assessment_name');
      expect(assessment).toHaveProperty('assessment_type');
      expect(assessment).toHaveProperty('score');
      expect(assessment).toHaveProperty('date_taken');
    });
  });

  it('should handle errors well', async () => {
    const userId = '999'; // Specify an invalid user ID
    const response = await request(app)
      .get(`/progress/${userId}`);

    // status code of 200 expected with empty array
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(0);
  });
});

// test 6
describe('GET /users/name/:user_id', () => {
  it('should return the user\'s full name for the specified user ID', async () => {
    const userId = '1'; // Specify a valid user ID
    const response = await request(app)
      .get(`/users/name/${userId}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(1); // expect exactly one result
    expect(response.body[0]).toHaveProperty('fullname'); // should contain property fullname
    expect(typeof response.body[0].fullname).toBe('string'); // fullname should be a string
  });

  it('should handle errors well', async () => {
    const userId = '999'; // specify an invalid user ID
    const response = await request(app)
      .get(`/users/name/${userId}`);

    // status code of 200 expected with empty array
    expect(response.status).toBe(200); 
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(0); 
  });
});

// test 7
describe('GET /average_score/:user_id', () => {
  it('should return the average score for the specified user ID', async () => {
    const userId = '1'; // specify a valid user ID
    const response = await request(app)
      .get(`/average_score/${userId}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(1); // expect exactly one result
    expect(response.body[0]).toHaveProperty('avg'); // should contain property avg
    expect(typeof response.body[0].avg).toBe('string'); // avg should be a string
  });

  it('should handle errors well', async () => {
    const userId = '999'; // specify an invalid user ID
    const response = await request(app)
      .get(`/average_score/${userId}`);

    // status code of 200 expected with empty array
    expect(response.status).toBe(200); 
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty('avg');
    expect(typeof response.body[0].avg).toBe('object'); // avg should be an object that is null
  });
});