import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // For navigation

    const fetchUserData = async () => {
        const email = localStorage.getItem('userEmail');
        if (email) {
            try {
                const response = await axios.get(`http://localhost:5000/user/${email}`);
                console.log('API response:', response.data); // Debugging
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error.response ? error.response.data : error.message);
                setUser(null); // Handle error case
            }
        } else {
            console.error('No email found in local storage');
            setUser(null); // No email found, handle appropriately
        }
        setLoading(false);
    };
    

    useEffect(() => {
        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading message or spinner
    }

    if (!user) {
        return <div>Error loading user data. Please try again later.</div>; // Handle case when user data is not found
    }

    return (
        <div className="container">

            <div className="sidebar">
                <h1>{user.name || 'Student Name'}</h1>
            </div>
            <div className="main-content">
                <div className="overview-section">
                    <div className="overview-card">
                        <i className="icon fas fa-user"></i>
                        <h3>Name</h3>
                        <p>{user.name || 'N/A'}</p>
                    </div>
                    <div className="overview-card">
                        <i className="icon fas fa-graduation-cap"></i>
                        <h3>Class</h3>
                        <p>{user.class || 'N/A'}</p>
                    </div>
                    <div className="overview-card">
                        <i className="icon fas fa-calendar-check"></i>
                        <h3>Attendance</h3>
                        <p>{user.attendance || 'N/A'}</p>
                    </div>
                    <div className="overview-card">
                        <i className="icon fas fa-trophy"></i>
                        <h3>Class Rank</h3>
                        <p>{user.class_rank || 'N/A'}</p>
                    </div>
                    <div className="overview-card">
                        <i className="icon fas fa-star"></i>
                        <h3>Achievements</h3>
                        <p>{user.achievements || 'N/A'}</p>
                    </div>
                    <div className="overview-card">
                        <i className="icon fas fa-chart-line"></i>
                        <h3>Performance</h3>
                        <p>{user.performance || 'N/A'}</p>
                    </div>
                    <div className="overview-card">
                        <i className="icon fas fa-percent"></i>
                        <h3>Percentage</h3>
                        <p>{user.percentage || 'N/A'}</p>
                    </div>
                    <div className="overview-card">
                        <i className="icon fas fa-book"></i>
                        <h3>Total Marks</h3>
                        <p>{user.total_marks || 'N/A'}</p>
                    </div>
                    <div className="overview-card">
                        <i className="icon fas fa-graduation-cap"></i>
                        <h3>Grade</h3>
                        <p>{user.grade || 'N/A'}</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                }

                .sidebar {
                    width: 250px;
                    background: #f4f4f4;
                    padding: 20px;
                }

                .sidebar h1 {
                    font-size: 24px;
                    margin-bottom: 10px;
                }

                .sidebar p {
                    font-size: 18px;
                    margin-bottom: 20px;
                }

                .sidebar ul {
                    list-style: none;
                    padding: 0;
                }

                .sidebar ul li {
                    margin-bottom: 10px;
                }

                .sidebar ul li a {
                    text-decoration: none;
                    color: #333;
                }

                .main-content {
                    flex: 1;
                    padding: 20px;
                }

                .overview-section {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .overview-card {
                    flex: 1 1 calc(33.333% - 20px);
                    background: #fff;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    text-align: center;
                }

                .overview-card i {
                    font-size: 36px;
                    margin-bottom: 10px;
                    color: #007bff;
                }

                .overview-card h3 {
                    font-size: 18px;
                    margin-bottom: 10px;
                }

                .overview-card p {
                    font-size: 16px;
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default StudentDashboard;
