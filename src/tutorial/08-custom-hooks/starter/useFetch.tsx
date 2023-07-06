import React, { useState, useEffect } from "react";
type Person = {
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
};
function useFetch(url: string): [boolean, boolean, Person | null] {
  console.log(url);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setdata] = useState<Person | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const response = await resp.json();
        setdata(response);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  console.log(data);
  return [isError, isLoading, data];
}

export default useFetch;
