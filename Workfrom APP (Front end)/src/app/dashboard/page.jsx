'use client';

import { Sidebar, Button, Checkbox, Label, TextInput, FileInput } from 'flowbite-react';
import { HiOutlineOfficeBuilding, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiCog, HiViewBoards } from 'react-icons/hi';
import Navbar from "../../components/navbar";

export default function dashboard() {
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
                </div>
            </div>
        </>
    )
}


