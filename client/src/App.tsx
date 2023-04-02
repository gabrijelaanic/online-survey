import { Container, HStack, Spinner } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Survey from './survey/components/Survey';
import { mapDataFiledsToSurvey, mapSurveyToDataFileds } from './survey/helpers/fromJSONToObject';
import useSurvey from './survey/hooks/useSurvery';
import ErrorPage from './common/components/ErrorPage';
import { sendAnswers } from './api/survey-api';
import { useToast } from '@chakra-ui/react';
import { AnswersDTO } from './survey/models/answersDTO';
import { QuestionDTO } from './survey/models/surveyDTO';

function App() {
  const { data, error, isLoading } = useSurvey();
  const formFields = mapSurveyToDataFileds(data);
  const navigate = useNavigate();
  const toast = useToast();

  const onSurveySubmit = async (fieldValues: FieldValues) => {
    const surveyBM = mapDataFiledsToSurvey(fieldValues);
    await sendAnswers(data?.data.id, surveyBM)
      .then((response) => {
        const questions = data?.data.attributes.questions as QuestionDTO[];
        const answers = (response.data as AnswersDTO).data.attributes.answers;

        // Merge answers and questions based on questionId and take only what is needed for thank you page
        const answerSummary = answers
          .map((answerObj) => ({
            ...questions.find((question) => question.questionId == answerObj.questionId && question),
            ...answerObj,
          }))
          .map((object) => {
            return {
              label: object.label,
              answer: object.answer,
            };
          });

        navigate('/thank-you');
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: 'Error',
          description: "Something went wrong. We're working on it!",
          status: 'error',
          duration: 7000,
          isClosable: true,
        });
      });
  };

  if (error) return <ErrorPage errorMessage={error} />;

  if (isLoading)
    return (
      <HStack justifyContent="center" marginTop={6}>
        <Spinner label="Loading..." size="xl" />
      </HStack>
    );

  return (
    <Container maxW="3xl">
      <Survey
        formFields={formFields}
        title={data?.data.attributes.title}
        description={data?.data.attributes.description}
        onSubmit={onSurveySubmit}
      />
    </Container>
  );
}

export default App;
