import React, { useState } from "react";

const ShortCircuitExamples = () => {
  interface IUser {
    name: string;
  }
  // falsy
  const [text, setText] = useState<string>("");
  // truthy
  const [name, setName] = useState<string>("susan");
  const [user, setUser] = useState<IUser>({ name: "Karan" });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div>
      <h2>{text || "Default Value"}</h2>
      {text && (
        <div>
          <h2>Whatever Return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}

      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "Edit" : "Add"}</button>

      {user ? (
        <div>
          <h2>Hello There user {user.name}</h2>
        </div>
      ) : (
        <div>
          <h2>Please Login In</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = (props: { name: string }) => {
  return (
    <div>
      <h2>Whatever Return</h2>
      <h2>{props.name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
