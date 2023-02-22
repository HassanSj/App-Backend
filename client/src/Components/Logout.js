import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
  localStorage.removeItem("token");
  localStorage.removeItem("userinfo");
  function redirect() {
    navigate("/");
  }
  return (
    <>
      <h1>Logout Page</h1>
      <button
        className="btn btn-outline-danger my-2 my-sm-0"
        type="submit"
        onClick={redirect}
      >
        LogIn
      </button>
    </>
  );
}

export default Logout;
