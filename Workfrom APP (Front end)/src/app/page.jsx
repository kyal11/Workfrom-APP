import Image from 'next/image';
import Navbar from "../components/navbar";
import Maps from "../components/maps";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="md:py-8 md:px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <div className='mb-5'>
            <h6>Office & Coworking Space</h6>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Find a Room</h1>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><span className=' text-blue-600'>For Every Job</span></h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">With a variety of room options that can be adapted to suit your needs your needs, we will help you find work space that suits your budget and needs. Find it your work space now and increase your work productivity!.</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Continue As Buyers
            </a>
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Continue As Buyers
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
