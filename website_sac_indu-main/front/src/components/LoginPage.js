// LoginPage.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions/auth";
import Footer from "./Footer";
import Footercomp from "./Footercomp";
import NavbarLatest from "./NavbarLatest";

const LoginPage = ({ login, isAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const credentials = { username, password };
    login(credentials);
    // Redirect to the home page
    //window.location.href = "/admin";
  };
  if (isAuthenticated) {
    // Redirect to another page upon successful login
    return (window.location.href = "/admin");
  }

  return (
    <div style={{ paddingTop: "200px" }}>
      <NavbarLatest />
      <div style={{ paddingBottom: "100px" }}>
        <h2>Login Page</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <Footercomp />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginPage);
// export default connect(null, { login })(LoginPage);
