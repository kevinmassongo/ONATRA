import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import TrainTracking from "../pages/trainTracking";
import Register from "../pages/register";
import ItinaryManagement from "../pages/itinaryManagement";
import Reports from "../pages/ReportAndAnalysis";
import AlertManagement from "../pages/alertManagement";
import StationCoordination from "../pages/stationCoordination";

function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                {/* La page login sera la page par défaut */}
                <Route path="/" element={<Login />} />

                <Route path="/register" element={<Register />} />
                <Route path="/" element={<App />}>
                    <Route path="/train-tracking" element={<TrainTracking />} />
                    <Route path="/station-coordination" element={<StationCoordination />} />
                    <Route path="/itinary-management" element={<ItinaryManagement />} />
                    <Route path="/alert-management" element={<AlertManagement />} />
                    <Route path="/reports" element={<Reports />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteApp;
