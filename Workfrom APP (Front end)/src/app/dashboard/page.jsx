'use client';

import { Sidebar, Button, Checkbox, Label, TextInput, FileInput } from 'flowbite-react';
import { HiOutlineOfficeBuilding, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiCog, HiViewBoards } from 'react-icons/hi';
import { useRouter } from "next/navigation";
import Navbar from "../../components/navbar";
import React, { useEffect } from 'react';

export default function dashboard() {
    const router = useRouter();
    const logout = () => {
        localStorage.removeItem('token');
    };
    useEffect(() => {
    }, []);
    return (
        <>
            <Navbar />
            <Sidebar className=' bg-blue-600 float-left h-full' aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Collapse
                            // className=' w-[175px]'
                            icon={HiTable}
                            label="Product"
                        >
                            <Sidebar.Item href="#">
                                Add Products
                            </Sidebar.Item>
                            <Sidebar.Item href="#">
                                Best Selling Product
                            </Sidebar.Item>
                            <Sidebar.Item href="#">
                                Product Out of Stock
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse
                            // className=' w-[175px]'
                            icon={HiOutlineOfficeBuilding}
                            label="Delivery"
                        >
                            <Sidebar.Item href="#">
                                Add Products
                            </Sidebar.Item>
                            <Sidebar.Item href="#">
                                Best Selling Product
                            </Sidebar.Item>
                            <Sidebar.Item href="#">
                                Product Out of Stock
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse
                            // className=' w-[175px]'
                            icon={HiChartPie}
                            label="Finance"
                        >
                            <Sidebar.Item href="#">
                                Add Products
                            </Sidebar.Item>
                            <Sidebar.Item href="#">
                                Best Selling Product
                            </Sidebar.Item>
                            <Sidebar.Item href="#">
                                Product Out of Stock
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse
                            // className=' w-[200px]'
                            icon={HiCog}
                            label="My Setting"
                        >
                            <Sidebar.Item href="#">
                                Add Products
                            </Sidebar.Item>
                            <Sidebar.Item href="#">
                                Best Selling Product
                            </Sidebar.Item>
                            <Sidebar.Item href="#">
                                Product Out of Stock
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Item onClick={logout}>
                            Logout
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
            <div className='float-right px-7 py-7 w-[80%]'>
                <div className=" max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h1 className=' text-center text-2xl font-extrabold'>My Product</h1>
                    <form className="flex max-w-[100%] flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="office-name"
                                    value="Office Name"
                                />
                            </div>
                            <TextInput
                                id="office-name"
                                required
                                shadow
                                type="text"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="location"
                                    value="Location"
                                />
                            </div>
                            <TextInput
                                id="location"
                                required
                                shadow
                                type="text"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="text-place"
                                    value="Place"
                                />
                            </div>
                            <TextInput
                                id="text-place"
                                required
                                shadow
                                type="text"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="text-rooms"
                                    value="Rooms"
                                />
                            </div>
                            <TextInput
                                id="text-rooms"
                                required
                                shadow
                                type="text"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="number"
                                    value="Price"
                                />
                            </div>
                            <TextInput
                                id="number"
                                required
                                shadow
                                type="number"
                            />
                        </div>
                        <div
                            // className="max-w-md"
                            id="fileUpload"
                        >
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="file"
                                    value="Add Image"
                                />
                            </div>
                            <FileInput
                                helperText="A profile picture is useful to confirm your are logged into your account"
                                id="file"
                            />
                        </div>
                        <div className=''>
                            <a href="#" className=" float-right inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Save
                            </a>
                            <a href="#" className=" float-right inline-flex mr-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Reset
                            </a>
                        </div>
                    </form>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3">
                            <thead className="text-xs text-white uppercase bg-blue-600 dark:bg-blue-700 dark:text-white rounded-sm">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Office name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Location
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Place
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Rooms
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Edit</button>
                                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Delete</button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Edit</button>
                                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Delete</button>
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Edit</button>
                                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}


