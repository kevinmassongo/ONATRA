import React, { useState } from "react";
import "../../styles/common/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import OpenMenu from "../../assets/OpenMenu.svg";
import Train from "../../assets/Train.svg";
import Itineraire from "../../assets/Itinéraire.svg";
import Station from "../../assets/StationCoordination.svg";
import Alert from "../../assets/Alert.svg";
import Report from "../../assets/Report.svg";
import Logo from "./logo";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false); // Initial state: icons only

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        { path: "/train-tracking", label: "Suivi de trains", icon: Train },
        { path: "/itinary-management", label: "Gestion des itinéraires", icon: Itineraire },
        { path: "/station-coordination", label: "Coordination des Gares", icon: Station },
        { path: "/alert-management", label: "Alertes et Sécurité", icon: Alert },
        { path: "/reports", label: "Rapports et Analyses", icon: Report },
    ];

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <nav className="sidebar-nav">
                <div className="menuOpen" onClick={toggleSidebar}>
                    <a className="sidebar-link-menu">
                        <Logo src={OpenMenu} alt="logo open menu" className="logo" />
                    </a>
                </div>
                {links.map((link) => (
                    <a
                        key={link.path}
                        href={link.path}
                        className={`sidebar-link ${location.pathname === link.path ? "active" : ""}`}
                    >
                        <div className="sidebar-item">
                            <Logo src={link.icon} className="logo" />
                            {isOpen && <span>{link.label}</span>}
                        </div>
                    </a>
                ))}
                <a href="#" className="sidebar-link" onClick={handleLogout}>
                    <div className="sidebar-item">
                        <FontAwesomeIcon icon={faRightFromBracket} size="2" color="#908B88" />
                        {isOpen && <span>Déconnexion</span>}
                    </div>
                </a>
            </nav>
        </div>
    );
};

export default Sidebar;