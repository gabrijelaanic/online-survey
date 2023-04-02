import { DynamicFieldData } from '../models/dynamic-form-types';
import DynamicInputControl from './DynamicInputControl';
import DynamicRatingControl from './DynamicRatingControl';

interface Props {
  dynamicFieldData: DynamicFieldData;
}

const DynamicFormControl = ({ dynamicFieldData }: Props) => {
  const { inputType, fieldName, config, defaultValue } = dynamicFieldData;

  switch (inputType) {
    case 'text':
      return (
        <DynamicInputControl inputType={inputType} fieldName={fieldName} config={config} defaultValue={defaultValue} />
      );
    case 'rating':
      return <DynamicRatingControl fieldName={fieldName} config={config} defaultValue={defaultValue} />;
    default:
      return <DynamicInputControl inputType="text" fieldName={fieldName} config={config} defaultValue={defaultValue} />;
  }
};

export default DynamicFormControl;
