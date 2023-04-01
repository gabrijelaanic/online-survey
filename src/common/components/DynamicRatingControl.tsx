import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

interface Props {
  fieldName: string;
  defaultValue: any;
  config?: any;
}

const DynamicRatingControl = ({ fieldName, defaultValue, config }: Props) => {
  const { register } = useFormContext();

  return (
    <RadioGroup defaultValue={defaultValue}>
      <Stack spacing={5} direction="row">
        {[...Array(config?.max?.value - config?.min?.value + 1 || 5)].map((_, index) => {
          const radioValue = index + config?.min?.value;
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
