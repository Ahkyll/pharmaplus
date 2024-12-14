import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigate('/admin-dashboard');
    } else if (username === 'employee' && password === 'password') {
      navigate('/employee-dashboard');
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#5B6EB7] h-screen w-screen">
      <div className="w-8/12">
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-60 h-60 object-contain"
          />
        </div>

        <h2 className="text-4xl text-center mb-6 font-bold text-white">PharmaPlus</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="text-m font-medium text-white flex justify-center items-center pt-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 bg-white text-black rounded-full shadow-sm sm:text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="text-m font-medium text-white flex justify-center items-center">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-white text-black rounded-full shadow-sm sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {errorMessage && (
            <p className="p-2 text-m text-white text-center bg-red-600 ">{errorMessage}</p>
          )}

          <div className="flex justify-center pt-2">
            <button onClick={handleLogin} className="w-40 p-2 bg-gradient-to-r from-[#5AC885] to-[#B5DB3B] text-white font-medium rounded-full hover:from-[#B5DB3B] hover:to-[#5AC885] focus:outline-none focus:ring-2 focus:ring-green-400 text-lg">
              Login
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}

export default LoginPage;
