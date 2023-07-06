import React from "react";
import { useContextData } from "./Navbar";
function UserContainer() {
  // const { name, logOut } = useContext(NavbarContext);
  //   console.log(useContext(NavbarContext));

  const { name, logOut } = useContextData();
  return (
    <div className="user-container">
      {name ? (
        <>
          <p>Hello, {name}</p>
          <button className="btn" onClick={logOut}>
            Logout
          </button>
        </>
      ) : (
        <button className="btn">Please Login</button>
      )}
    </div>
    // <h2>Hello World</h2>
  );
}

export default UserContainer;
