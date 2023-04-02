const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

// for parsing the body in POST request
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/v1/survey', (req, res) => {
  res.json({
    data: {
      type: 'surveys',
      id: '2660dd24-e2db-42c1-8093-284b1df2664c',
      attributes: {
        title: 'Film feedback form',
        description:
          '<p>Thank you for participating in the filmfestival!</p><p>Please fill out this short survey so we can record yourfeedback.</p>',
        questions: [
          {
            questionId: 'film',
            questionType: 'text',
            label: 'What film did you watch?',
            required: true,
            attributes: null,
          },
          {
            questionId: 'review',
            questionType: 'rating',
            label: 'How would you rate the film? (1 - Very bad, 5 - Very good)',
            required: true,
            attributes: { min: 1, max: 5 },
          },
        ],
      },
    },
  });
});

app.post('/api/v1/survey/:id/answers', (req, resp) => {
  var surveyAnswers = req.body;
  const result = {
    data: {
      type: 'surveyAnswers',
      id: '9c7160a4-e9ad-499e-92f6-07d7cdb0382c',
      attributes: {
        answers: surveyAnswers.data.attributes.answers,
      },
      relationships: {
        survey: {
          data: {
            type: 'surveys',
            id: req.params.id,
          },
        },
      },
    },
  };
  return resp.send(result);
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
