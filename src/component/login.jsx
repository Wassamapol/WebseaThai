import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // เก็บข้อมูลลงใน Local Storage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password); // ไม่แนะนำให้เก็บรหัสผ่านเป็น plain text

        console.log("Login Attempt", { email, password });
        alert('Logged in successfully!');

        // เปลี่ยนเส้นทางหลังจากล็อกอินสำเร็จ (ไปหน้า Dashboard หรือ Home)
        window.location.href = '/dashboard'; // แก้ไข URL ตามความเหมาะสม
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950">
            <form
                className="text-white  bg-gray-800 p-6 rounded-lg shadow-md w-96"
                onSubmit={handleLogin}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
                <button
                    type="submit"
                    className="w-full bg-cyan-900 text-gray-200 py-2 px-4 rounded hover:bg-cyan-950"
                >
                    Login
                </button>
                <p className="mt-4 text-center text-gray-00">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-cyan-400">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
