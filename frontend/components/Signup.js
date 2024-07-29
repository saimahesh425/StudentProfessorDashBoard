import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            // Prepare the payload with the required fields
            const payload = {
                name,
                email,
                password,
                role,
            };

            if (role === 'student') {
                payload.date_of_birth = dateOfBirth;
                payload.phone_number = phoneNumber;
            } else if (role === 'professor') {
                payload.department = department;
            }

            // Send the signup request to the backend
            const response = await axios.post('http://localhost:5000/signup', payload);
            console.log('Signup successful:', response.data);
            navigate('/');
        } catch (error) {
            console.error('Signup failed:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="student">Student</option>
                    <option value="professor">Professor</option>
                </select>
                {role === 'student' && (
                    <>
                        <input
                            type="date"
                            placeholder="Date of Birth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </>
                )}
                {role === 'professor' && (
                    <input
                        type="text"
                        placeholder="Department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                    />
                )}
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
