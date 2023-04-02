import { Box, HStack, ListItem, Spinner, Text, UnorderedList } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { NavigateOptions, useNavigate } from 'react-router-dom';
import Survey from './survey/components/Survey';
import { mapDataFiledsToSurvey, mapSurveyToDataFileds } from './survey/helpers/fromJSONToObject';
import useSurvey from './survey/hooks/useSurvery';
import ErrorPage from './common/components/ErrorPage';
import { sendAnswers } from './api/survey-api';
import { useToast } from '@chakra-ui/react';
import { AnswersDTO } from './survey/models/answersDTO';
import { QuestionDTO } from './survey/models/surveyDTO';
import { AnswerSummary } from './survey/models/answerSummary';
import { useState } from 'react';
import { FormError } from './common/models/form-error';

function App() {
  const { data, error, isLoading } = useSurvey();
  const formFields = mapSurveyToDataFileds(data);
  const navigate = useNavigate();
  const toast = useToast();
  const [formErrors, setformErrors] = useState<FormError[]>();

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
            } as AnswerSummary;
          });

        navigate('/thank-you', { state: answerSummary } as NavigateOptions);
      })
      .catch((error) => {
        if (error.response.status == 422 && error.response.data?.error) {
          const errors = error.response.data.error.errors;
          let formErrors = [] as { fieldName: string; errorMessage: string }[];
          errors.map((error: any) => {
            const questionId = error.source.pointer.split('/').pop();
            const label =
              data?.data.attributes.questions.find((question) => question.questionId == questionId)?.label || '';
            formErrors.push({
              fieldName: label,
              errorMessage: error.detail,
            } as FormError);
          });
          setformErrors(formErrors);
        } else {
          toast({
            title: 'Error',
            description: "Something went wrong. We're working on it!",
            status: 'error',
            duration: 7000,
            isClosable: true,
          });
        }
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
    <>
      <Survey
        formFields={formFields}
        title={data?.data.attributes.title}
        description={data?.data.attributes.description}
        onSubmit={onSurveySubmit}
      />
      {formErrors && (
        <Box marginY={3} color="red.600">
          <Text>The following error(s) occured:</Text>
          <UnorderedList>
            {formErrors.map((formError) => {
              return (
                <ListItem key={formError.fieldName}>
                  Field "{formError.fieldName}" with error "{formError.errorMessage}"
                </ListItem>
              );
            })}
          </UnorderedList>
        </Box>
      )}
    </>
  );
}

export default App;
