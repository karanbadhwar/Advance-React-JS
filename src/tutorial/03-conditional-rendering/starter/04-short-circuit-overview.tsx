import React, { useState } from "react";

const ShortCircuitOverview = () => {
  //Truthy
  const [name, setName] = useState<string>("Susan");

  //falsy
  const [text, setText] = useState<string>("");

  return (
    <section>
      <h4>Falsy OR: {text || "Hello World"} </h4>
      <h4>Falsy AND: {text && "Hello World"} </h4>
      <h4>Truthy OR: {name || "Hello World"} </h4>
      <h4>Truthy AND: {name && "Hello World"} </h4>
    </section>
  );
};
export default ShortCircuitOverview;
