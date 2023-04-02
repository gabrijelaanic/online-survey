import {
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Button,
  HStack,
  Box,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { DynamicFieldData } from '../../common/models/dynamic-form-types';
import parse from 'html-react-parser';
import DynamicFormControl from '../../common/components/DynamicFormControl';
import { ErrorMessage } from '@hookform/error-message';

interface Props {
  formFields: DynamicFieldData[];
  title?: string;
  description?: string;
  onSubmit: (filedValues: FieldValues) => void;
}

const Survey = ({ formFields, title, description, onSubmit }: Props) => {
  const formMethods = useForm();
  const {
    handleSubmit,
    getFieldState,
    formState: { isSubmitting, errors },
  } = formMethods;

  return (
    <Stack spacing="4">
      {(title || description) && (
        <Card size="lg" borderRadius="lg">
          {title && (
            <CardHeader paddingBottom={1}>
              <Heading>{title}</Heading>
            </CardHeader>
          )}
          <CardBody>{description && <Box>{parse(description)}</Box>}</CardBody>
        </Card>
      )}
      <Card size="lg" borderRadius="lg">
        <CardBody>
          {formFields.length > 0 && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing="4" marginBottom={6}>
                <FormProvider {...formMethods}>
                  {formFields.map((control) => (
                    <FormControl key={control.fieldName} isInvalid={getFieldState(control.fieldName).invalid}>
                      <FormLabel>{control.label}</FormLabel>
                      <DynamicFormControl dynamicFieldData={control} />
                      <FormErrorMessage>
                        <ErrorMessage errors={errors} name={control.fieldName} as={<p></p>} />
                      </FormErrorMessage>
                    </FormControl>
                  ))}
                </FormProvider>
              </VStack>
              <HStack justifyContent="end">
                <Button type="submit" isDisabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </HStack>
            </form>
          )}
          {formFields.length == 0 && <Text>No form data. We are working on it!</Text>}
        </CardBody>
      </Card>
    </Stack>
  );
};
export default Survey;
