import React, {useState} from 'react'
import './Login.css';

function Login({onLogin, goToRegister}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            setError("Please enter all details");
            return;
        }
        try {
            const response = await fetch("login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            });

            const data = await response.json();
            if (response.ok) {
                onLogin(data);
            } else {
                setError(data.message || "Login failed");
            }
        }
        catch (error) {
            setError("Login failed")
        }
    }
    return (
        <div className='login-container'>
            <h2>Login</h2>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            {error && <p className="error-message">{error}</p>}
            <p className="register-line">
                Don't have an account? <span className="register-inline-link" onClick={goToRegister}>Register</span>
            </p>
        </div>
    )
}

export default Login;