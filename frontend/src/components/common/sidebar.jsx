import React from "react";
import "../../styles/common/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBook, faList, faBell, faClockRotateLeft, faLocationDot, faChartSimple, faTrain, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <nav className="sidebar-nav">
        <a href="/" className="sidebar-link">
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faHouse} size="2" color="#908B88" />
            <p>Tableau de bord</p>
          </div>
        </a>
        <a href="/train-tracking" className="sidebar-link">
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faLocationDot} size="2" color="#908B88" />
            <p>Suivi de trains</p>
          </div>
        </a>
        <a href="/route-planning" className="sidebar-link">
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faList} size="2" color="#908B88" />
            <p>Planification des itinéraires</p>
          </div>
        </a>
        <a href="/listuser" className="sidebar-link">
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faChartSimple} size="2" color="#908B88" />
            <p>Rapport et analyse</p>
          </div>
        </a>
        <a href="/listuser" className="sidebar-link">
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faTrain} size="2" color="#908B88" />
            <p>Coordination des gares</p>
          </div>
        </a>
        <a href="/listuser" className="sidebar-link">
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faBell} size="2" color="#908B88" />
            <p>Gestion des Alertes et Sécurité</p>
          </div>
        </a>
        <a href="/listuser" className="sidebar-link">
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faClockRotateLeft} size="2" color="#908B88" />
            <p>Historique et Journalisation</p>
          </div>
        </a>
        <a href="/documentation" className="sidebar-link">
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faBook} size="2" color="#908B88" />
            <p>Support et Documentation</p>
          </div>
        </a>
        <a href="/login" className="sidebar-link">
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faRightFromBracket} size="2" color="#908B88" />
            <p>Connexion</p>
          </div>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
