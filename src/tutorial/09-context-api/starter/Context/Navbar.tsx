import React, { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

//Context Type
type ContextType = {
  name: string | null;
  logOut: () => void;
};

export const NavbarContext = createContext({} as ContextType);
// console.log(NavbarContext.Provider);

// Custom Hook

export const useContextData = () => {
  const { name, logOut } = useContext(NavbarContext);
  return { name, logOut };
};

function Navbar() {
  const [name, setName] = useState<string | null>("Karan");

  const logOut = () => {
    setName(null);
  };
  return (
    <NavbarContext.Provider value={{ name, logOut }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
