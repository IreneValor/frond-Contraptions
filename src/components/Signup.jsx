// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import authService from "../services/auth.service";

// const Signup = () => {
//   const [signupData, setSignupData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { value, name } = e.target;
//     setSignupData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     authService
//       .signup(signupData)
//       .then(() => navigate("/login"))
//       .catch((err) => console.log(err));
//   };

//   const { username, password, email } = signupData;

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleInputChange}
//           name="username"
//         />
//       </div>

//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handleInputChange}
//           name="password"
//         />
//       </div>

//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={handleInputChange}
//           name="email"
//         />
//       </div>

//       <div>
//         <button type="submit">Create user</button>
//         <Link to="/login">Login</Link>
//       </div>
//     </form>
//   );
// };

// export default Signup;





// CODIGO ONLINE // src/components/Navbar.js

// import { Link } from "react-router-dom";
// import { useContext } from "react";                     // <== IMPORT 
// import { AuthContext } from "../context/auth.context";  // <== IMPORT

// function Navbar() {
//   // Subscribe to the AuthContext to gain access to
//   // the values from AuthContext.Provider `value` prop
//   const { isLoggedIn, user } = useContext(AuthContext);   // <== ADD

  
//   //  Update the rendering logic to display different content 
//   //  depending on whether the user is logged in or not
//   return (
//     <nav>
//       <Link to="/">
//         <button>Home</button>
//       </Link>

//       {/*    UPDATE     */}
//       {isLoggedIn && (
//         <>
//           <Link to="/projects">
//             <button>Projects</button>
//           </Link>        
//           <button>Logout</button>
//         </>
//       )}

//       {!isLoggedIn && (
//         <>
//           <Link to="/signup"> <button>Sign Up</button> </Link>
//           <Link to="/login"> <button>Login</button> </Link>
//         </>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

