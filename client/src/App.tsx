import { Container, HStack, Spinner } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Survey from './survey/components/Survey';
import { mapDataFiledsToSurvey, mapSurveyToDataFileds } from './survey/helpers/fromJSONToObject';
import useSurvey from './survey/hooks/useSurvery';
import ErrorPage from './common/components/ErrorPage';

function App() {
  const { data, error, isLoading } = useSurvey();
  const formFields = mapSurveyToDataFileds(data);
  const navigate = useNavigate();

  const onSurveySubmit = (fieldValues: FieldValues) => {
    const surveyBM = mapDataFiledsToSurvey(fieldValues);
    navigate('/thank-you');
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
