import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

export const SignUp = () => {


  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate('/dashboard')
  }

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  //http request bhejna hai ? bhej denge kal tak
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/v1/signUp', formData);

      if (response.status === 200) {
        // Sign Up successful
        console.log('Sign Up Successfull');
        navigate('/dashboard');
      } else {
        // Sign Up failed, handle the error
        console.error('Sign Up failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-8">Sign Up</h2>

        {/* Normal Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              NickName
            </label>
            <input
              type="text"
              id="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
              name="nickname"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>


        <div className="mt-6">
          <p className="text-sm text-gray-600">Or Sign Up with</p>

          {/* Google Authentication Button */}
          <button
            onClick={() => loginWithRedirect()}
            className="mt-2 w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  )
}
