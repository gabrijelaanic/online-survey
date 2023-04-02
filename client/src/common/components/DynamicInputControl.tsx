import { Input } from '@chakra-ui/react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface Props {
  fieldName: string;
  defaultValue: any;
  config?: RegisterOptions;
  inputType: 'text' | 'number' | 'email';
}
const DynamicInputControl = ({ fieldName, defaultValue, config, inputType }: Props) => {
  const { register } = useFormContext();

  return <Input type={inputType} {...register(fieldName, config)} defaultValue={defaultValue} />;
};

export default DynamicInputControl;
