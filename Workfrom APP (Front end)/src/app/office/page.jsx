'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import axios from 'axios';
import Maps from "../../components/maps";
import Navbar from "../../components/navbar";
import { BiMap } from 'react-icons/bi';
import { BsFillBuildingFill } from 'react-icons/bs';
import { FaPerson } from 'react-icons/fa6';
import { BASE_URL } from "../../components/config";

function office() {
    const [data, setData] = useState([]);
    const router = useRouter();

    function formatToRupiah(price) {
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
        return formatter.format(price);
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}properties`);
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]); // Atau atur ke default yang sesuai
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        router.push('/')
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <Navbar />
            <div className=' container mx-auto px-10'>
                <div className=' mt-3'>
                    <h1 className="text-3xl font-extrabold tracking-tight leading-none text-blue-900 md:text-5xl lg:text-3xl dark:text-blue-600 text-center">Use Case</h1>
                </div>
                <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10'>
                    <div className="mb-6">
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select an option
                        </label>
                        <select
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select an option
                        </label>
                        <select
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option >Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="default-range"
                            className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Default range
                        </label>
                        <input
                            id="default-range"
                            type="range"
                            defaultValue={50}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="default-range"
                            className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Default range
                        </label>
                        <input
                            id="default-range"
                            type="range"
                            defaultValue={50}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                    </div>
                </div>
                <div className=''>
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-3 md:float-left md:w-[69%]">
                        {data.length > 0 ? (
                            data.map((item) => (
                                <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-lg" src="https://images3.alphacoders.com/132/1329164.png" alt="" />
                                    </a>
                                    <div className="p-2">
                                        <div className=''>
                                            <a href="#" className="inline-flex mr-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                rapat
                                            </a>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                presentasi
                                            </a>
                                        </div>
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                        </a>
                                        <div className=' flex mt-2'>
                                            <BsFillBuildingFill className='mr-2 mt-1' />
                                            <h1>{item.building_name}</h1>
                                        </div>
                                        <div>
                                            <div className=' flex mt-2'>
                                                <BiMap className='mr-2 mt-1' />
                                                <h1>{item.domicile}</h1>
                                            </div>
                                            <div>
                                                <h2 className=''>
                                                    {item.address}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className=' flex mt-2 mb-2'>
                                            <FaPerson className="mr-2" />
                                            <h1 className=' font-extrabold mr-1'> {item.capacity} People</h1>
                                            <h1 className=' font-extrabold text-blue-600 text-sm mt-1'>{formatToRupiah(item.price)}</h1>
                                        </div>
                                        <div className=' flex items-center justify-center'>
                                            <a href="/chat" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[50%] justify-center">
                                                Chat
                                            </a>
                                            <a href={`/detail?param=${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[50%] justify-center ml-2">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Data is empty or not available.</p>
                        )}
                    </div>
                    <div className=' md:float-right md:w-[30%]'>
                        <Maps />
                    </div>
                </div>
            </div>
        </>
    )
}

export default office