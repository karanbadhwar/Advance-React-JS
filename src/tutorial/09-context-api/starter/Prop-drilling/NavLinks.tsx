import React from "react";
import UserContainer from "./UserContainer";

function NavLinks({
  name,
  logout,
}: {
  name: string | null;
  logout: () => void;
}) {
  //   console.log(name);
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer name={name} logout={logout} />
    </div>
  );
}

export default NavLinks;
