import survey from '../../data/surveyData';
import { SurveyDto } from '../models/surveyDto';

const useSurvey = () => ({
  surveyData: survey as SurveyDto,
});

export default useSurvey;
