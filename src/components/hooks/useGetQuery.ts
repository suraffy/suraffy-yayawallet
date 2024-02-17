import { useQuery } from "react-query";
import axios from "axios";

const useGetQuery = (key: string, url: string) => {
  const fetchData = () => axios.get(url);

  return useQuery(key, fetchData, {
    cacheTime: 3000000, // 5 minutes
    staleTime: 30000, // 30 seconds
    refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });
};

export default useGetQuery;
