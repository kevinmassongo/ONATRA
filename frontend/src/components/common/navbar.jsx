import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoOfOnatra from "../../assets/logo-white.png";
import Logo from "./logo";
import "../../styles/common/navbar.css";

function NavBar({ isSidebarOpen, setIsSidebarOpen }) {
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-box">
          <a href="/app">
            <Logo src={logoOfOnatra} alt="logo de la société" style="logo" />
          </a>
          <span>ONATRA S.A</span>
        </div>
        <div className="menu" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaBars color="white" fontSize={20} /> : <FaTimes color="white" fontSize={20} />}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
