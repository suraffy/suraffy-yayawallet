import { useQuery } from "react-query";
import axios from "axios";

const useFetchData = (
  key: string | (string | number)[],
  method: string,
  url: string,
  body: object
) => {
  const fetchData = () => {
    if (method === "GET") return axios.get(url);
    if (method === "POST") return axios.post(url, body);
  };

  return useQuery(key, fetchData, {
    cacheTime: 3000000, // 5 minutes
    staleTime: 30000, // 30 seconds
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export default useFetchData;
