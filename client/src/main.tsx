import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThankYou from './survey/components/ThankYou';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ChakraProvider>
      <Container maxW="3xl" marginY={4}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Container>
    </ChakraProvider>
  </BrowserRouter>
);
