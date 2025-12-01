import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(username, password);

        if (success) {
            navigate("/admin");
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div className="login-wrapper">
            <h2>Iniciar sesión</h2>

            <form onSubmit={handleSubmit}>
                <label>Usuario:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;
