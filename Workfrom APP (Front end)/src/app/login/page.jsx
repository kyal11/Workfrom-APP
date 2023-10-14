"use client"
import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from "../../components/navbar";
import { BASE_URL } from "../../components/config";
import axios from 'axios';

function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const params = useSearchParams();
    const role = params.get('role')
    console.log(role)

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${BASE_URL}login`, {
                email,
                password,
            });

            const token = response.data.token;
            console.log(token)

            localStorage.setItem('token', token);
            if (localStorage.getItem('token')) {
                router.push('/office');
            }
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
        }
    };

    useEffect(() => {
    }, []);
    return (
        <>
            <Navbar />
            <div className='grid grid-cols-2 h-full p-7'>
                <div className=' flex items-center justify-center'>
                    <div className="max-w-sm p-6 bg-blue-700 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 w-[25rem] h-[35rem] mt-[-5rem] shadow-lg">
                        <div className=' flex justify-center items-center mb-9'>
                            <h1 className=' font-extrabold text-3xl text-white'>LOGIN</h1>
                        </div>
                        <form>
                            <div className=' mb-4'>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onInput={(e) => setEmail(e.target.value)}
                                    className="input input-bordered input-dark w-full max-w-xs"
                                />
                            </div>
                            <div className=' mb-4'>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onInput={(e) => setPassword(e.target.value)}
                                    className="input input-bordered input-dark w-full max-w-xs"
                                />
                            </div>
                        </form>
                        <div className=' flex items-center justify-center mt-2'>
                            <a onClick={handleSubmit} className="inline-flex items-center px-7 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Login
                            </a>
                        </div>
                        <div className='flex items-center justify-center mt-[13rem]'>
                            <h1 className=' text-white font-extrabold text-[12px]'>You don't have an account yet? <span className=' text-green-400'><a href="/register">click Registration</a></span></h1>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-center'>
                    <div className=' mt-[-8rem] text-center mr-12'>
                        <h1 className=' text-4xl font-extrabold text-blue-600'>
                            <p>Please log in to be able</p> <p>to choose the</p><p>company you want</p>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login