import { Container } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Survey from './survey/components/Survey';
import { mapDataFiledsToSurvey, mapSurveyToDataFileds } from './survey/helpers/fromJSONToObject';
import useSurvey from './survey/hooks/useSurvery';

function App() {
  const { surveyData } = useSurvey();
  const formFields = mapSurveyToDataFileds(surveyData);
  const navigate = useNavigate();

  const onSurveySubmit = (fieldValues: FieldValues) => {
    const surveyBM = mapDataFiledsToSurvey(fieldValues);
    navigate('/thank-you');
  };

  return (
    <Container maxW="3xl">
      <Survey
        formFields={formFields}
        title={surveyData.data.attributes.title}
        description={surveyData.data.attributes.description}
        onSubmit={onSurveySubmit}
      />
    </Container>
  );
}

export default App;
