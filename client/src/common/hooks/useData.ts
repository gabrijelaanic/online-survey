import { AxiosRequestConfig, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../../api/api-client';

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);

      apiClient
        .get<T>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          let errorMessage = `Something went wrong. We're working on it!`;
          if (error.errors?.length) {
            errorMessage = error.errors[0].detail;
          }
          setError(errorMessage);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
