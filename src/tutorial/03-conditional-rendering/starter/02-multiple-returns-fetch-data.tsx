import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  interface IUser {
    bio: string;
    name: string;
    id: number;
    avatar_url: string;
    html_url: string;
    company: string;
  }

  const [user, setUser] = useState<IUser>({} as IUser);
  const [isloading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (resp.ok) {
          const user: IUser = await resp.json();
          setUser(user);
        } else {
          setIsError(true);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isloading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an Error...</h2>;
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <section>
      <img
        src={avatar_url}
        style={{
          width: "150px",
          borderRadius: "25px",
        }}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </section>
  );
};
export default MultipleReturnsFetchData;
