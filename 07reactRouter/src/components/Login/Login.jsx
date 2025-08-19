import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert(`Logged in with ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-orange-100">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <h1 className="text-5xl font-extrabold text-orange-600">Login Now</h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md flex flex-col space-y-6"
        >
          <input
            type="Name"
            value={name}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username"
            required
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-4 rounded-xl font-semibold hover:bg-orange-700 transition shadow-md"
          >
            Log In
          </button>
        </form>

        {/* Extra links */}
        <div className="text-sm text-gray-500">
          Don't have an account? <span className="text-orange-600 font-medium cursor-pointer hover:underline">Sign up</span>
        </div>
      </div>
    </div>
  );
}

export default Login;