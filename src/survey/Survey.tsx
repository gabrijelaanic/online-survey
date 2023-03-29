import {
  Heading,
  VStack,
  Text,
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
} from '@chakra-ui/react';

const Survey = () => {
  return (
    <Stack spacing="4" marginY={4}>
      <Card size="lg" borderRadius="lg">
        <CardHeader paddingBottom={1}>
          <Heading>Film feedback form</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            <p>Thank you for participating in the filmfestival!</p>
            <p>Please fill out this short survey so we can record yourfeedback.</p>
          </Text>
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
