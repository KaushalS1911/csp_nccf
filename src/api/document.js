import useSWR from 'swr';
import { useMemo } from 'react';
import { fetcher } from '../utils/axios';
import { useAuthContext } from 'src/auth/hooks';
export function useGetDocuments() {
  const { vendor } = useAuthContext();

  const URL = `http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${vendor?.csp_code}/documents`;
  // const URL = 'http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/U1P069S85_Karnataka/documents';
  const { data, isLoading, error, isValidating, mutate } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      document: data?.data ,
      documentLoading: isLoading,
      documentError: error,
      documentValidating: isValidating,
      documentEmpty: !isLoading && !data?.data.length,
      mutate,
    }),
    [data?.data, error, isLoading, isValidating, mutate]
  );
  return memoizedValue;
}
