import "./LoginForm.css";

const LoginForm = () => {
    return (
        <form className="login-form">
            <input type="text" placeholder="Usuário" className="login-input" />
            <input type="password" placeholder="Senha" className="login-input" />
            <button type="submit" className="login-button">Entrar</button>
        </form>
    );
};

export default LoginForm;
