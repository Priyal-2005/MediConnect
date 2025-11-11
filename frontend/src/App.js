import React, {useState} from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);

  return (
    <>
      {page === "login" && (
        <Login 
        onLogin={(userData) => {
          setUser(userData);
          setPage("dashboard");
        }}
        goToRegister={() => setPage("register")}/>
      )}
      {page === "register" && (
        <Register
        onRegister={() => setPage("login")}
        goToLogin={() => setPage("login")}/>
      )}
      {page === "dashboard" && user && (
        <Dashboard user={user} onLogout={() => {
          setUser(null);
          setPage("login");
        }}/>
      )}
    </>
  )
}

export default App;