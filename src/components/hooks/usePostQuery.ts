import { useQuery } from "react-query";
import axios from "axios";

const usePostQuery = (key: string, url: string, body: object) => {
  const fetchData = () => axios.post(url, body);

  return useQuery(key, fetchData, {
    cacheTime: 3000000, // 5 minutes
    staleTime: 30000, // 30 seconds
    refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });
};

export default usePostQuery;
