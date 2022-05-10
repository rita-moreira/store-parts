import axios from 'axios';
import useSWR from 'swr';

export const api = axios.create({
  baseURL: 'http://localhost:8081',
});

export function useFetch<Data = any, Error = any>(
  route: string,
  type?: string
) {
  const { data, error, mutate } = useSWR<Data, Error>(
    route,
    async (url: string) => {
      const response = await api.get(url, {
        params: { type },
      });

      return response.data;
    }
  );

  return { data, error, mutate };
}
