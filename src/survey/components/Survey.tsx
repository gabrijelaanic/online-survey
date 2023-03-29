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
import useSurvey from '../hooks/useSurvery';

const Survey = () => {
  const { data } = useSurvey();

  return (
    <Stack spacing="4" marginY={4}>
      <Card size="lg" borderRadius="lg">
        <CardHeader paddingBottom={1}>
          <Heading>Film feedback form</Heading>
        </CardHeader>
        <CardBody>
          <Box>
            <p>Thank you for participating in the filmfestival!</p>
            <p>Please fill out this short survey so we can record yourfeedback.</p>
          </Box>
        </CardBody>
      </Card>
      <Card size="lg" borderRadius="lg">
        <CardBody>
          <form>
            <VStack spacing="4">
              <FormControl>
                <FormLabel>What film did you watch?</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>How would you rate the film? (1 - Very bad, 5 - Verygood)</FormLabel>
                <Select placeholder="Select option">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </FormControl>
            </VStack>
          </form>
        </CardBody>
      </Card>
      <HStack justifyContent="end">
        <Button>Submit</Button>
      </HStack>
    </Stack>
  );
};

export default Survey;
