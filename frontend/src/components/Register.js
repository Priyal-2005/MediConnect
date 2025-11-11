import React, {useState} from 'react'

function Register({onRegister, goToLogin}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("PATIENT");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async () => {
        try {
            const response = await fetch("/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, email, password, role})
            })

            const data = await response.json();
            if (response.ok) {
                setSuccess("Registration successful.");
                onRegister();
            }
            else {
                setError(data.message || "Registration failed");
            }
        }
        catch (error) {
            setError("Registration failed")
        }
    }
    return (
        <div>
            <h2>Register</h2>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="PATIENT">Patient</option>
                <option value="DOCTOR">Doctor</option>
                <option value="ADMIN">Admin</option>
            </select>
            <button onClick={handleRegister}>Register</button>
            {error && <p style={{color: "red"}}>{error}</p>}
            {success && <p style={{color: "green"}}>{success}</p>}
            <p>Already have an account? <span onClick={goToLogin} style={{color:"blue", cursor: "pointer"}}>Login</span></p>
        </div>
    )
}

export default Register