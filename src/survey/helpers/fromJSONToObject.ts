import { DynamicFieldData } from '../../common/dynamic-form-types';
import { FieldValues, RegisterOptions } from 'react-hook-form';
import { SurveyDTO } from '../models/surveyDTO';
import { AnswerBM, SurveyBM } from '../models/surveyBM';

export function mapSurveyToDataFileds(surveyData: SurveyDTO): DynamicFieldData[] {
  let dynamicFileds = surveyData.data.attributes.questions.map((question) => {
    return {
      fieldName: question.questionId,
      inputType: question.questionType,
      label: question.label,
      config: {
        required: question.required ? `Field is required` : null,
        min: { value: question.attributes?.min, message: `Minimum value is ${question.attributes?.min}` },
        max: { value: question.attributes?.max, message: `Maximum value is ${question.attributes?.max}` },
      } as RegisterOptions,
    } as DynamicFieldData;
  });

  return dynamicFileds;
}

export function mapDataFiledsToSurvey(fieldValues: FieldValues): SurveyBM {
  const answers = Object.keys(fieldValues).map((key) => {
    return {
      questionId: key,
      answer: parseInt(fieldValues[key]) || fieldValues[key],
    } as AnswerBM;
  });

  const survey = {
    data: {
      type: 'surveyAnswers',
      attributes: {
        answers: answers,
      },
    },
  } as SurveyBM;

  return survey;
}
