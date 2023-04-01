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
        required: question.required ? `Field is required` : null,
        min: { value: question.attributes?.min, message: `Minimum value is ${question.attributes?.min}` },
        max: { value: question.attributes?.max, message: `Maximum value is ${question.attributes?.max}` },
      } as RegisterOptions,
    } as DynamicFieldData;
  });

  return dynamicFileds;
}
