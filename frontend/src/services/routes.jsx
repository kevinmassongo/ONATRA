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
                <Route path="/" element={<App />} >
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/train-tracking" element={<TrainTracking />} />
                    <Route path="/route-planning" element={<RoutePlanning />} />
                    <Route path="/documentation" element={<SupportAndDocumentation />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;