import React, { useState } from "react";
import "./LoginForm.css";
import {login} from "../../../services/authService.js";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const token = await login(email, password);
            localStorage.setItem("authToken", token);
            alert("Login bem-sucedido!");
            window.location.href = "/dashboard";
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
                required
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button">Entrar</button>
        </form>
    );
};

export default LoginForm;
