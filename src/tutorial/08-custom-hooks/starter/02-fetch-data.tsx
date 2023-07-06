import React, { useState, useRef } from "react";
import useFetch from "./useFetch";

type Person = {
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
};

const FetchData = () => {
  const [name, setName] = useState<string>();
  const url = `https://api.github.com/users/${name || "QuincyLarson"}`;
  console.log(url);
  const nameRef = useRef<HTMLInputElement>(null);
  const [isLoading, isError, user] = useFetch(url);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameL = nameRef.current?.value!;
    setName(nameL);
  };
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  // const { avatar_url, name, company, bio }: Person = user;
  return (
    <>
      <div>
        <img
          style={{ width: "100px", borderRadius: "25px" }}
          src={user?.avatar_url}
          alt={user?.name}
        />
        <h2>{user?.name}</h2>
        <h4>works at {user?.company || "Private"}</h4>
        <p>{user?.bio || "Private"}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} />
        <button className="btn">Submit</button>
      </form>
    </>
  );
};
export default FetchData;
