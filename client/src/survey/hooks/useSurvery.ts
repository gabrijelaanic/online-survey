import survey from '../../data/surveyData';
import { SurveyDTO } from '../models/surveyDTO';

const useSurvey = () => ({
  surveyData: survey as SurveyDTO,
});

export default useSurvey;
