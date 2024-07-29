// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             const email = localStorage.getItem('userEmail');
//             if (email) {
//                 try {
//                     const response = await axios.get(`http://localhost:5000/user/${email}`);
//                     setUser(response.data);
//                 } catch (error) {
//                     console.error('Error fetching user data:', error);
//                 }
//             }
//             setLoading(false);
//         };

//         fetchUserData();
//     }, []);

//     const handleSignOut = () => {
//         localStorage.removeItem('userEmail');
//         window.location.href = '/login'; // Redirect to login page
//     };

//     if (loading) return <div>Loading...</div>;

//     return (
//         <div>
//             {user ? (
//                 <div>
//                     <h1>Dashboard</h1>
//                     <p><strong>Name:</strong> {user.name}</p>
//                     <p><strong>Phone Number:</strong> {user.phone_number}</p>
//                     <p><strong>Date of Birth:</strong> {user.date_of_birth}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <button onClick={handleSignOut}>Sign Out</button>
//                 </div>
//             ) : (
//                 <div>User not found</div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        const fetchUserData = async () => {
            const email = localStorage.getItem('userEmail');
            if (email) {
                try {
                    const response = await axios.get(`http://localhost:5000/user/${email}`);
                    setUser(response.data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setUser(null); // Handle error case
                }
            } else {
                setUser(null); // No email found, handle appropriately
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('userEmail');
        navigate('/'); // Redirect to login page using react-router
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {user ? (
                <div>
                    <h1>Dashboard</h1>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Phone Number:</strong> {user.phone_number}</p>
                    <p><strong>Date of Birth:</strong> {user.date_of_birth}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <div>User not found</div>
            )}
        </div>
    );
};

export default Dashboard;
