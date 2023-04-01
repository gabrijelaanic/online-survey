import { Container } from '@chakra-ui/react';
import Survey from './survey/components/Survey';
import { mapDataToFileds } from './survey/helpers/fromJSONToObject';
import useSurvey from './survey/hooks/useSurvery';

function App() {
  const { surveyData } = useSurvey();
  const formFields = mapDataToFileds(surveyData);

  return (
    <Container maxW="3xl">
      <Survey
        formFields={formFields}
        title={surveyData.data.attributes.title}
        description={surveyData.data.attributes.description}
      />
    </Container>
  );
}

export default App;
