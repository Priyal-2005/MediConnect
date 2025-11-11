import React, {useState, useEffect} from 'react';

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
        <div>
            <h2>User Dashboard</h2>
            <h1>Hello {userData.name}!</h1>
            <p>Role: {userData.role}</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;