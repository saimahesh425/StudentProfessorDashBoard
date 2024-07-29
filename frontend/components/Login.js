// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [role, setRole] = useState('student');
//     const [dateOfBirth, setDateOfBirth] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [isSignup, setIsSignup] = useState(false);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (isSignup) {
//                 await axios.post('http://localhost:5000/signup', { name, email, password, role, date_of_birth: dateOfBirth, phone_number: phoneNumber });
//                 setIsSignup(false);
//                 setError('');
//                 alert('Signup successful, please login.');
//             } else {
//                 const response = await axios.post('http://localhost:5000/login', { email, password });
//                 if (response.status === 200) {
//                     localStorage.setItem('userEmail', response.data.user.email);
//                     navigate('/dashboard');
//                 }
//             }
//         } catch (error) {
//             setError('Operation failed');
//             console.error('Operation failed:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>{isSignup ? 'Signup' : 'Login'}</h1>
//             <form onSubmit={handleSubmit}>
//                 {isSignup && (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="date"
//                             placeholder="Date of Birth"
//                             value={dateOfBirth}
//                             onChange={(e) => setDateOfBirth(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="tel"
//                             placeholder="Phone Number"
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             required
//                         />
//                     </>
//                 )}
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 {isSignup && (
//                     <select value={role} onChange={(e) => setRole(e.target.value)}>
//                         <option value="student">Student</option>
//                         <option value="professor">Professor</option>
//                     </select>
//                 )}
//                 <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
//             </form>
//             {error && <p>{error}</p>}
//             <button onClick={() => setIsSignup(!isSignup)}>
//                 {isSignup ? 'Already have an account? Login' : 'No account? Signup'}
//             </button>
//         </div>
//     );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './login.css'; // Import the CSS file

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [role, setRole] = useState('student');
//     const [dateOfBirth, setDateOfBirth] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [isSignup, setIsSignup] = useState(false);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (isSignup) {
//                 await axios.post('http://localhost:5000/signup', { name, email, password, role, date_of_birth: dateOfBirth, phone_number: phoneNumber });
//                 setIsSignup(false);
//                 setError('');
//                 alert('Signup successful, please login.');
//             } else {
//                 const response = await axios.post('http://localhost:5000/login', { email, password });
//                 if (response.status === 200) {
//                     localStorage.setItem('userEmail', response.data.user.email);
//                     navigate('/dashboard');
//                 }
//             }
//         } catch (error) {
//             setError('Operation failed');
//             console.error('Operation failed:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h1>{isSignup ? 'Signup' : 'Login'}</h1>
//             <form onSubmit={handleSubmit}>
//                 {isSignup && (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="date"
//                             placeholder="Date of Birth"
//                             value={dateOfBirth}
//                             onChange={(e) => setDateOfBirth(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="tel"
//                             placeholder="Phone Number"
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             required
//                         />
//                     </>
//                 )}
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 {isSignup && (
//                     <select value={role} onChange={(e) => setRole(e.target.value)}>
//                         <option value="student">Student</option>
//                         <option value="professor">Professor</option>
//                     </select>
//                 )}
//                 <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
//             </form>
//             {error && <p>{error}</p>}
//             <button className="switch-button" onClick={() => setIsSignup(!isSignup)}>
//                 {isSignup ? 'Already have an account? Login' : 'No account? Signup'}
//             </button>
//         </div>
//     );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './login.css'; // Import the CSS file

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [role, setRole] = useState('student');
//     const [dateOfBirth, setDateOfBirth] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [isSignup, setIsSignup] = useState(false);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (isSignup) {
//                 await axios.post('http://localhost:5000/signup', { name, email, password, role, date_of_birth: dateOfBirth, phone_number: phoneNumber });
//                 setIsSignup(false);
//                 setError('');
//                 alert('Signup successful, please login.');
//             } else {
//                 const response = await axios.post('http://localhost:5000/login', { email, password });
//                 if (response.status === 200) {
//                     localStorage.setItem('userEmail', response.data.user.email);
//                     localStorage.setItem('userRole', response.data.user.role); // Store role in localStorage
//                     if (response.data.user.role === 'student') {
//                         navigate('/student-dashboard');
//                     } else if (response.data.user.role === 'professor') {
//                         navigate('/professor-dashboard');
//                     }
//                 }
//             }
//         } catch (error) {
//             setError('Operation failed');
//             console.error('Operation failed:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h1>{isSignup ? 'Signup' : 'Login'}</h1>
//             <form onSubmit={handleSubmit}>
//                 {isSignup && (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="date"
//                             placeholder="Date of Birth"
//                             value={dateOfBirth}
//                             onChange={(e) => setDateOfBirth(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="tel"
//                             placeholder="Phone Number"
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             required
//                         />
//                     </>
//                 )}
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 {isSignup && (
//                     <select value={role} onChange={(e) => setRole(e.target.value)}>
//                         <option value="student">Student</option>
//                         <option value="professor">Professor</option>
//                     </select>
//                 )}
//                 <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
//             </form>
//             {error && <p>{error}</p>}
//             <button className="switch-button" onClick={() => setIsSignup(!isSignup)}>
//                 {isSignup ? 'Already have an account? Login' : 'No account? Signup'}
//             </button>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import your CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            if (response.status === 200) {
                localStorage.setItem('userEmail', response.data.user.email);
                localStorage.setItem('userRole', response.data.user.role); // Store role in localStorage
                if (response.data.user.role === 'student') {
                    navigate('/student-dashboard');
                } else if (response.data.user.role === 'professor') {
                    navigate('/professor-dashboard');
                }
            }
        } catch (error) {
            setError('Login failed');
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
            <button className="switch-button" onClick={() => navigate('/signup')}>
                Don't have an account? Sign up
            </button>
        </div>
    );
};

export default Login;
