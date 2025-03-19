import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/common/navbar";
import Sidebar from "./components/common/sidebar";
import "./App.css";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Initial state: closed (icons only)

    return (
        <div className="app-container">
            <div className="layout-row">
                <Sidebar setIsOpen={setIsSidebarOpen} />
                <div className="layout-column">
                    <NavBar />
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;