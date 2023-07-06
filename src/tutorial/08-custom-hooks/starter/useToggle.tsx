import React, { useState } from "react";

function useToggle(defaultValue: boolean): [boolean, () => void] {
  const [show, setShow] = useState<boolean>(defaultValue);
  console.log("Re-render from custom hook");
  const toggle = (): void => {
    setShow(!show);
  };

  return [show, toggle];
}

export default useToggle;
