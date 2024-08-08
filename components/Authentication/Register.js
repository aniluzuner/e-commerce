"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Register () {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    event.preventDefault();

    axios.post('http://localhost:5000/users/register', {username, password}, {
      headers: {
        'Content-Type': 'application/json',
    },})
    .then(response => {
      const session = {
        _id: response.data._id,
        username: response.data.username,
      };
      
      window.localStorage.setItem('session', JSON.stringify(session));

      console.log('User registered successfully:', response.data);
      router.push('/');

    })
    .catch(error => {
      setIncorrect(true);
      console.error('Error during register:', error.message);
    })
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto py-24">
          <div className="w-full bg-zinc-950 rounded-2xl shadow dark:border-4 border-zinc-900 md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign Up
                  </h1>
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                          <input type="text" name="username" onChange={(event) => setUsername(event.target.value)} id="username" className="bg-zinc-900 text-black dark:text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password" name="password" onChange={(event) => setPassword(event.target.value)} id="password" className="bg-zinc-900 text-black dark:text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      </div>
                      <button type="submit" className="bg-zinc-900 w-full text-white bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="/Authentication/Login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
  

}