import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import TrainTracking from "../pages/trainTracking";
import RoutePlanning from "../pages/routePlanning";
import SupportAndDocumentation from "../pages/supportAndDocumentation";

function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                {/* La page login sera la page par défaut */}
                <Route path="/" element={<Login />} />
                
                {/* Routes protégées après la connexion */}
                <Route path="/" element={<App />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/train-tracking" element={<TrainTracking />} />
                    <Route path="/route-planning" element={<RoutePlanning />} />
                    <Route path="/documentation" element={<SupportAndDocumentation />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteApp;
