import React, { useState } from "react";
import useToggle from "./useToggle";
import { Console } from "console";

const ToggleExample = () => {
  console.log("First render");
  const [show, toggle] = useToggle(false);

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
