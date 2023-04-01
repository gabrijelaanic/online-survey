import { DynamicFieldData } from '../../common/dynamic-form-types';
import { SurveyDto } from '../models/surveyDto';
import { RegisterOptions } from 'react-hook-form';

export function mapDataToFileds(surveyData: SurveyDto): DynamicFieldData[] {
  let dynamicFileds = surveyData.data.attributes.questions.map((question) => {
    return {
      fieldName: question.questionId,
      inputType: question.questionType,
      label: question.label,
      config: {
        required: question.required ? `${question.label} is required` : null,
        min: question.attributes?.min,
        max: question.attributes?.max,
      } as RegisterOptions,
    } as DynamicFieldData;
  });

  return dynamicFileds;
}
