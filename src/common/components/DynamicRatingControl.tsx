import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface Props {
  fieldName: string;
  defaultValue: any;
  config?: RegisterOptions;
}

const DynamicRatingControl = ({ fieldName, defaultValue, config }: Props) => {
  const { register } = useFormContext();

  return (
    <RadioGroup defaultValue={defaultValue}>
      <Stack spacing={5} direction="row">
        {[...Array(config?.max || 5)].map((_, index) => {
          const radioValue = index + 1;
          return (
            <Radio key={radioValue} value={radioValue.toString()} {...register(fieldName, config)}>
              {radioValue}
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};

export default DynamicRatingControl;
