import { AnswerBM } from './surveyBM';

export interface AnswersDTO {
  data: {
    type: 'surveyAnswers';
    id: string;
    attributes: {
      answers: AnswerBM[];
    };
    relationships: {
      survey: {
        data: {
          type: 'surveys';
          id: string;
        };
      };
    };
  };
}
