import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function redirect() {
    navigate("/logout");
  }
  return (
    <>
      {/* eslint-disable */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/dashboard">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>

          <button
            className="btn btn-outline-danger my-2 my-sm-0"
            type="submit"
            onClick={redirect}
          >
            LogOut
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
