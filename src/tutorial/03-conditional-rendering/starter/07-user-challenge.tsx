import React, { useState } from "react";

interface User{
  name: string
}
const UserChallenge = () => {
  const [user,setUser] = useState<User | null>(null)

  function login():void{
    setUser({
      name: 'Karan'
    })
  }

  function logout ():void{
    setUser(null)
  }
  return <>
  {user ? <h4>Hello There, {user.name}</h4> : <h4>Please Login</h4>}
  {!user? <button className="btn" onClick={login}>Login</button>: <button className="btn" onClick={logout}>LogOut</button> }
  </>;
};

export default UserChallenge;
