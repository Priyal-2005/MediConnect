import React, {useState, useEffect} from 'react';
import './Dashboard.css';

function Dashboard({user, onLogout}) {
    const [userData, setUserData] = useState(null);

    useEffect (() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("/user", {
                    headers: {Authorization: `Bearer ${user.token}`}
                })
                const data = await response.json();
                setUserData(data.data || null)
            }
            catch (error) {
                console.error("Error fetching user data:", error);
            }};
        fetchUser();
    }, [user]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard-container">
            <h1>User Dashboard</h1>
            <h2>Hello {userData.name}!</h2>
            <p>Role: {userData.role}</p>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;