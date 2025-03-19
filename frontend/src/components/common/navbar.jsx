import React from "react";
import logoOfOnatra from "../../assets/logo-onatra.svg";
import userPhoto from "../../assets/user-photo.svg";
import notification from "../../assets/notification.svg";
import search from "../../assets/search.svg";
import Logo from "./logo";
import "../../styles/common/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-box">
          <a href="/train-tracking">
            <Logo
              src={logoOfOnatra}
              alt="logo de la société"
              className="logo-onatra"
            />
          </a>
        </div>
        <div className="navbar-item">
          <div>
            <Logo src={search} alt="logo open menu" className="logo" />

          </div>
          <div>
            <Logo src={notification} alt="logo open menu" className="logo" />

          </div>
          <div>

            <Logo src={userPhoto} alt="logo open menu" className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;  