import { Routes, Route } from "react-router-dom";
import LoginPage from "./componentes/Login/LoginPage/LoginPage.jsx";
import Dashboard from "./componentes/Dashboard/Dashboard/Dashboard.jsx";


function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App;
