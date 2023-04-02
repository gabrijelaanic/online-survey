import { SurveyBM } from '../survey/models/surveyBM';
import apiClient from './api-client';

export function sendAnswers(surveyId: string = '', surveyBM: SurveyBM) {
  return apiClient.post(`v1/survey/${surveyId}/answers`, surveyBM);
}
