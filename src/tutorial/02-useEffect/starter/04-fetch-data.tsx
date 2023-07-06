import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

interface IFetchData {
  id: string | number;
  avatar_url: string;
  login: string;
  html_url: string;
}

const FetchData = () => {
  const [users, setUsers] = useState<IFetchData[]>([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(url);
        const users: IFetchData[] = await response.json();
        console.log(users[0]);

        setUsers(users);
      } catch (err) {
        console.log("errs", err);
      }
    };
    fetchdata();
  }, []);
  return (
    <section>
      <h3>GitHUb Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
