import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

function Routes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;