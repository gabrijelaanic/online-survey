export interface SurveyDTO {
  data: {
    type: 'surveys';
    id: string;
    attributes: {
      title: string;
      description: string;
      questions: {
        questionId: string;
        questionType: 'text' | 'rating';
        label: string;
        required: boolean;
        attributes: any;
      }[];
    };
  };
}
