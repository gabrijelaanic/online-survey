export interface SurveyBM {
  data: {
    type: 'surveyAnswers';
    attributes: {
      answers: AnswerBM[];
    };
  };
}

export interface AnswerBM {
  questionId: string;
  answer: string | number;
}
