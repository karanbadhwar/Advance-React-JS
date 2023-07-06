import { log } from "console";
import React, { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return <div>
    <button className="btn" onClick={() => setToggle(!toggle)}> Toggle Component</button>
    {toggle && <RandomComponent />}
  </div>;
};

const RandomComponent = () => {
  
  useEffect(() => {
    console.log('Use Effect');
   
    const intId = setInterval(() =>{
      console.log('Set Interval')
    }, 1000)
    return () => {
      clearInterval(intId)
    }
  }, [])
  return <h1>Hello There</h1>
}
export default CleanupFunction;
