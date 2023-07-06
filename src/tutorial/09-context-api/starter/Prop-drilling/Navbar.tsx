import React, { useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const [name, setName] = useState<string | null>("Karan");

  const logOut = () => {
    setName(null);
  };
  return (
    <nav className="navbar">
      <h5>Context API</h5>
      <NavLinks name={name} logout={logOut} />
    </nav>
  );
}

export default Navbar;
