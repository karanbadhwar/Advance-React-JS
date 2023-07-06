import React, { useState } from "react";
const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false)

  // const toggleALert = ():void =>{
  //   if(showAlert){
  //     setShowAlert(false)
  //     return
  //   }
  //   setShowAlert(true)
  // }
  return <div>
    <button className="btn" onClick={() => setShowAlert(!showAlert)}>Toggle</button>
    {showAlert && <Alert />}
  </div>;
};

const Alert = () =>{
  return <div className="alert alert-danger">Hello World</div>
}
export default ToggleChallenge;
