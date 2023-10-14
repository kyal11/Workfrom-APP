import React from 'react'
import Navbar from "../../components/navbar";
import {BsFillPlusSquareFill} from "react-icons/bs";
import {BiImageAdd} from "react-icons/bi";
import {AiOutlineSend} from "react-icons/ai";

function chat() {
    return (
        <>
            <Navbar />
            <div className="drawer">
                <div className="drawer-content flex flex-col items-center justify-center">
                    <div className="card w-full h-full bg-base-100 shadow-xl">
                        <div className="card-body overflow-y-scroll">
                            <div className="card-body">
                                <div className=' card-title flex justify-center items-center'>
                                    <h2 className="btn">Today</h2>
                                </div>
                                <div className="chat chat-start">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://images.alphacoders.com/133/thumbbig-1332755.webp" />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        Azzahra
                                        <time className="text-xs opacity-50">12:45</time>
                                    </div>
                                    <div className="chat-bubble">You were the Chosen One!</div>
                                    <div className="chat-footer opacity-50">
                                        Delivered
                                    </div>
                                </div>
                                <div className="chat chat-end">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://images7.alphacoders.com/130/1308868.png" />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        Me
                                        <time className="text-xs opacity-50">12:46</time>
                                    </div>
                                    <div className="chat-bubble">I booking!</div>
                                    <div className="chat-footer opacity-50">
                                        Seen at 12:46
                                    </div>
                                </div>
                                <div className="chat chat-start">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://images.alphacoders.com/133/thumbbig-1332755.webp" />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        Azzahra
                                        <time className="text-xs opacity-50">12:45</time>
                                    </div>
                                    <div className="chat-bubble">
                                        Yes, for bookings
                                        <p className=' mt-3'>
                                            <button className="btn btn-primary mr-2">Yes</button>
                                            <button className="btn btn-primary">No</button>
                                        </p>
                                    </div>
                                    <div className="chat-footer opacity-50">
                                        Delivered
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="input-group">
                                <span className=' btn'><BsFillPlusSquareFill/></span>
                                <span className=' btn'><BiImageAdd/></span>
                                <input type="text" placeholder="Kirim pesan.." className="input input-bordered w-full" />
                                <span className=' btn'><AiOutlineSend/></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex items-center">
                            {/* Sidebar content here */}
                            <li className=' mb-3' >
                                <a className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <div
                                            className="bg-center bg-cover w-8 h-8"
                                            style={{ backgroundImage: `url('https://images.alphacoders.com/133/thumbbig-1332755.webp')` }}
                                        ></div>
                                    </div>
                                    <span className="text-2xl font-semibold">Azzahra</span>
                                </a>
                            </li>
                            <hr className='h-[2px] w-full bg-black mb-2' />
                            <li className=' mb-3' >
                                <a className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <div
                                            className="bg-center bg-cover w-8 h-8"
                                            style={{ backgroundImage: `url('https://images7.alphacoders.com/130/1308868.png')` }}
                                        ></div>
                                    </div>
                                    <span className="text-2xl font-semibold">Baihaqi</span>
                                </a>
                            </li>
                            <hr className='h-[2px] w-full bg-black mb-2' />
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default chat