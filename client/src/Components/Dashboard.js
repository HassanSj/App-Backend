import img from "../wassets/images/Bls.png";
import "../wassets/css/style.css";
import $ from "jquery";
import Navbar from "./Navbar";

function Dashboard() {
  let token = localStorage.getItem("userinfo");
  return (
    <>
      <Navbar />

      <h1 style={{ marginLeft: "470px", marginTop: "30px" }}>
        WELCOME TO Dashboard {token}
      </h1>
    </>
  );
}

export default Dashboard;
