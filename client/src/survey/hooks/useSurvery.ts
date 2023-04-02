import useData from '../../common/hooks/useData';
import { SurveyDTO } from '../models/surveyDTO';

const useSurvey = () => useData<SurveyDTO>('v1/survey');

export default useSurvey;
