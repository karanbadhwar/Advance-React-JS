import React, { useState } from "react";
import { data } from "../../../data";
import { log } from "console";

//Interfaces
interface People {
  id: number;
  name: string;
}

const UserChallenge = () => {
  const [name, setName] = useState<string>("");
  const [people, setPeople] = useState<People[]>(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(people);

    e.preventDefault();
    if (name) {
      const newData = [
        ...people,
        {
          id: Date.now(),
          name: `${name}`,
        },
      ];
      setName("");
      setPeople(newData);
    } else {
      alert("Please Enter a value");
    }
  };

  const removeUser = (id: number) => {
    const updatedUsers = people.filter((person) => person.id !== id);
    setPeople(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button className="btn" onClick={() => removeUser(person.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
