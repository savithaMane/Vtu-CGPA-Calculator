import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const LogoutButton = () => {
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  };
  if (
    localStorage.getItem("username") !== null &&
    localStorage.getItem("password") !== null
  ) {
    return <Button onClick={logout}>Logout</Button>;
  }
  return "";
};

export default function Nav({ type, showSgpa }) {
  if (type === "back")
    return (
      <header>
        <Link to="/">
          <img
            className="back"
            src={require("../assets/Arrow.png")}
            alt="Calculate CGPA"
          />
        </Link>
        {!showSgpa && (
          <Link to="/cgpa" className="go_cgpa">
            <Button>CGPA</Button>
          </Link>
        )}
        <LogoutButton />
      </header>
    );
  return (
    <div>
      <header>
        <img
          className="logo"
          src={require("../assets/logo.png")}
          alt="SGPA calculator"
        />
        <LogoutButton />
      </header>
    </div>
  );
}
