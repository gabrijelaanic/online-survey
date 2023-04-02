import { WarningIcon } from '@chakra-ui/icons';
import { Card, CardBody, Container, HStack, Text } from '@chakra-ui/react';

interface Props {
  errorMessage: string;
}

const ErrorPage = ({ errorMessage }: Props) => {
  return (
    <Container maxW="3xl">
      <Card size="lg" borderRadius="lg" marginY={4}>
        <CardBody>
          <HStack justifyContent="center" marginBottom={4}>
            <WarningIcon boxSize={10} />
          </HStack>
          <Text fontSize="2xl" align="center">
            {errorMessage || 'Something went wrong. We are working on it!'}
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ErrorPage;
