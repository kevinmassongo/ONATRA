import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/common/navbar";
import Sidebar from "./components/common/sidebar";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app-container">
      <NavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="main-layout">
        <Sidebar isOpen={isSidebarOpen} />

        <div className={`content ${isSidebarOpen ? "shifted" : "full-width"}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
