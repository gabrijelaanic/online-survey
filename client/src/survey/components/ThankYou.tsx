import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnswerSummary } from '../models/answerSummary';
import { Link } from '@chakra-ui/react';
import { useEffect } from 'react';

const ThankYou = () => {
  const location = useLocation();
  const answerSummary = (location.state as AnswerSummary[]) || [];
  const navigate = useNavigate();

  useEffect(() => {
    if (!answerSummary.length) {
      navigate('/');
    }
  }, []);

  return (
    <Stack spacing="4">
      <Card size="lg" borderRadius="lg">
        <CardHeader paddingBottom={1}>
          <Heading>Thank you!</Heading>
        </CardHeader>
        <CardBody>
          <Box>
            <Text>Your response has been recorded.</Text>
            <Text pt="2">Here is a preview of the questions and answers that were submitted.</Text>
          </Box>
        </CardBody>
      </Card>

      <Card size="lg" borderRadius="lg">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {answerSummary.map((summary) => {
              return (
                <Box key={summary.label}>
                  <Heading size="s">{summary.label}</Heading>
                  <Text pt="2">{summary.answer || '-'}</Text>
                </Box>
              );
            })}
          </Stack>
        </CardBody>
        <CardFooter paddingTop={0}>
          <Link href="/" color="teal.500">
            Submit another answer
          </Link>
        </CardFooter>
      </Card>
    </Stack>
  );
};

export default ThankYou;
