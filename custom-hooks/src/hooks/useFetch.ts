import { useState, useEffect } from 'react';

type Params = {
    params?: {
        _limit: number
    }
}

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const fetchData = async (params?: Params) => {
    setIsLoading(true);
    setError(null);
    try {
      let response
      if(params){
        response = await fetch(`${url}?_limit=${params.params?._limit}`)
      }else {
        response = await fetch(url)
      }
      if (!response.ok) {
        throw new Error('Ответ сервера не ок');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
        if(err instanceof Error) {
            setError(err.message)
        }else {
            setError('Неизвестная ошибка')
        }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error, refetch: fetchData };
};

export default useFetch;
