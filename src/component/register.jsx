import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        // ตรวจสอบว่ารหัสผ่านและยืนยันรหัสผ่านตรงกัน
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // เก็บข้อมูลใน Local Storage
        localStorage.setItem('registeredEmail', email);
        localStorage.setItem('registeredPassword', password);

        alert('Registration successful! You can now log in.');
        window.location.href = '/login'; // แก้ไข URL ตามความเหมาะสม
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950">
            <form
                className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-96"
                onSubmit={handleRegister}
            >
                <h2 className="text-2xl text-gray-200 font-bold mb-6 text-center">Register</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-200">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded mt-2"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-200">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 border rounded mt-2"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirm-password" className="block text-gray-200">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirm-password"
                        className="w-full p-2 border rounded mt-2"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-900 text-white py-2 px-4 rounded hover:bg-cyan-950"
                >
                    Register
                </button>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-cyan-400">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Register;
