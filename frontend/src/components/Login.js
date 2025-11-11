import React, {useState} from 'react'

function Login({onLogin, goToRegister}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
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
        <div>
            <h2>Login</h2>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{color: "red"}}>{error}</p>}
            <p>Dont have an account? <span onClick={goToRegister} style={{color: "blue", cursor: "pointer"}}>Register</span></p>
        </div>
    )
}

export default Login;