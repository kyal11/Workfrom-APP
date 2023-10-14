'use client'
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { BASE_URL } from "../../components/config";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FaShareSquare } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdOutlineDiscount } from 'react-icons/md';
import { BiMap } from 'react-icons/bi';
import { BsFillBuildingFill, BsFillChatLeftTextFill } from 'react-icons/bs';
import Navbar from "../../components/navbar";

function detail() {
    const searchParams = useSearchParams()
    const id = searchParams.get('param')
    const [data, setData] = useState([]);
    // const router = useRouter();

    function formatToRupiah(price) {
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
        return formatter.format(price);
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}properties/${id}`);
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]); // Atau atur ke default yang sesuai
        }
    };

    console.log(id)

    useEffect(() => {
        fetchData();
    }, []);

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className=' '>
            <Navbar />
            <div className='grid grid-cols-2 gap-2 p-8'>
                <div className='flex items-center justify-center'>
                    <div className='w-[680px] h-[500px] m-auto relative group'>
                        <div
                            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                        ></div>
                        {/* Left Arrow */}
                        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactLeft onClick={prevSlide} size={30} />
                        </div>
                        {/* Right Arrow */}
                        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactRight onClick={nextSlide} size={30} />
                        </div>
                        <div className='flex top-4 justify-center py-2'>
                            {slides.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className='text-2xl cursor-pointer'
                                >
                                    <RxDotFilled />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='ml-6'>
                        <div className=' text-blue-700'>
                            <h1 className='md:text-2xl lg:text-4xl font-extrabold text-2xl'>{data.name}</h1>
                        </div>
                        <div className=' grid grid-cols-4 gap-4'>
                            <div class="flex items-center mt-2 col-span-3">
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 </p>
                            </div>
                            <div className='flex mt-2'>
                                <AiOutlineHeart className=' mr-4' />
                                <FaShareSquare className=' mr-4' />
                                <RiWhatsappFill />
                            </div>
                        </div>
                        <div>
                            <div className=' flex mt-2'>
                                <BiMap className='mr-2 mt-1' />
                                <h1>{data.domicile}</h1>
                            </div>
                            <div>
                                <h2 className=' w-[450px]'>
                                    {data.address}
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div className=' flex mt-2'>
                                <BsFillBuildingFill className='mr-2 mt-1' />
                                <h1>{data.building_name}</h1>
                            </div>
                        </div>
                        <div>
                            <div className=' flex mt-2'>
                                <h1 className=' font-extrabold'> Deskripsi</h1>
                            </div>
                            <div>
                                <h2 className=' w-[450px]'>
                                    {data.description}
                                </h2>
                            </div>
                            {/* <ul class="list-disc ml-6 mt-2">
                                <li>2 floors</li>
                                <li>1 Bathroom</li>
                                <li>3 Rooms</li>
                                <li>1 Kitchen</li>
                            </ul> */}
                        </div>
                        <div className=' flex mt-2'>
                            <FaPerson className="mr-2" />
                            <h1 className=' font-extrabold'> {data.capacity} People</h1>
                        </div>
                        <div className=''>
                            <p class="line-through ml-6">Rp. 8.500.000</p>
                            <div className='flex'>
                                <MdOutlineDiscount className=' text-2xl' />
                                <h1 className=' font-extrabold text-blue-600 text-2xl'>{formatToRupiah(data.price)}</h1>
                            </div>
                        </div>
                        <a href='/chat' class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2 w-full flex items-center justify-center"><BsFillChatLeftTextFill className=' mr-2' /> Chat </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default detail