import { Person } from "./Person";
import React from "react";
import { people } from "../../../data";

function List() {
  return (
    <div>
      <h2>List</h2>
      {people.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </div>
  );
}

export default List;
