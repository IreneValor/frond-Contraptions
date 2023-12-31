// src/components/Navbar.js
// ... previous imports stay unchanged

import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function Navbar() {
  const {
    isLoggedIn,
    user, // <== UPDATE
    logOutUser, // <== UPDATE
  } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
          </Link>

      {isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>

          {/*   UPDATE   */}
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
