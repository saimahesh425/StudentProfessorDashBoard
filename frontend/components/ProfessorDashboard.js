import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS

const ProfessorDashboard = () => {
    const [studentEmail, setStudentEmail] = useState('');
    const [studentData, setStudentData] = useState({});
    const [classRank, setClassRank] = useState('');
    const [attendance, setAttendance] = useState('');
    const [achievements, setAchievements] = useState('');
    const [performance, setPerformance] = useState('');
    const [testPerformance, setTestPerformance] = useState('');
    const navigate = useNavigate();

    const fetchStudentData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/user/${studentEmail}`);
            setStudentData(response.data);
        } catch (error) {
            console.error('Error fetching student data:', error);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/user/${studentEmail}`, {
                class_rank: classRank,
                attendance: attendance,
                achievements: achievements,
                performance: performance,
                test_performance: testPerformance
            });
            alert('Student details updated successfully');
            fetchStudentData(); // Refresh the student data after update
        } catch (error) {
            console.error('Error updating student data:', error);
        }
    };

    return (
        <div className="container">
            <h1>Professor Dashboard</h1>
            <div>
                <input 
                    type="email" 
                    value={studentEmail} 
                    onChange={(e) => setStudentEmail(e.target.value)} 
                    placeholder="Enter student email" 
                />
                <button onClick={fetchStudentData}>Fetch Student Data</button>
            </div>
            {studentData && (
                <div>
                    <h2>Student Data</h2>
                    <p>Name: {studentData.name}</p>
                    <p>Date of Birth: {studentData.date_of_birth}</p>
                    <p>Phone Number: {studentData.phone_number}</p>
                    <p>Email: {studentData.email}</p>
                    <p>Role: {studentData.role}</p>
                    <p>Department: {studentData.department}</p>
                    <div>
                        <input 
                            type="text" 
                            value={classRank} 
                            onChange={(e) => setClassRank(e.target.value)} 
                            placeholder="Class Rank" 
                        />
                        <input 
                            type="number" 
                            value={attendance} 
                            onChange={(e) => setAttendance(e.target.value)} 
                            placeholder="Attendance" 
                        />
                        <input 
                            type="text" 
                            value={achievements} 
                            onChange={(e) => setAchievements(e.target.value)} 
                            placeholder="Achievements" 
                        />
                        <input 
                            type="text" 
                            value={performance} 
                            onChange={(e) => setPerformance(e.target.value)} 
                            placeholder="Performance" 
                        />
                        <input 
                            type="text" 
                            value={testPerformance} 
                            onChange={(e) => setTestPerformance(e.target.value)} 
                            placeholder="Test Performance" 
                        />
                        <button onClick={handleUpdate}>Update Student Data</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfessorDashboard;
