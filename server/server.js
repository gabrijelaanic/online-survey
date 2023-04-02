const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

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

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
