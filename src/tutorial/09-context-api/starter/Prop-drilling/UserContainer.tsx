import React from "react";

function UserContainer({
  name,
  logout,
}: {
  name: string | null;
  logout: () => void;
}) {
  return (
    <div className="user-container">
      {name ? (
        <>
          <p>Hello, {name}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <button className="btn">Please Login</button>
      )}
    </div>
  );
}

export default UserContainer;
