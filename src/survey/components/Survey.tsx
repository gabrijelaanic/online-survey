import {
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Button,
  HStack,
  Box,
} from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { DynamicFieldData } from '../../common/dynamic-form-types';
import parse from 'html-react-parser';

interface Props {
  formFields: DynamicFieldData[];
  title?: string;
  description?: string;
}

const Survey = ({ formFields, title, description }: Props) => {
  const formMethods = useForm();
  return (
    <Stack spacing="4" marginY={4}>
      {(title || description) && (
        <Card size="lg" borderRadius="lg">
          {title && (
            <CardHeader paddingBottom={1}>
              <Heading>{title}</Heading>
            </CardHeader>
          )}
          {description && (
            <CardBody>
              <Box>{parse(description)}</Box>
            </CardBody>
          )}
        </Card>
      )}
      <Card size="lg" borderRadius="lg">
        <CardBody>
          <form>
            <VStack spacing="4">
              <FormProvider {...formMethods}>
                {formFields.map((control, index) => (
                  <FormControl key={index}>
                    <FormLabel>{control.label}</FormLabel>
                  </FormControl>
                ))}
              </FormProvider>
            </VStack>
            <HStack justifyContent="end">
              <Button type="submit">Submit</Button>
            </HStack>
          </form>
        </CardBody>
      </Card>
    </Stack>
  );
};
export default Survey;
