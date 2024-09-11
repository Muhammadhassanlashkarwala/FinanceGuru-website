import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import headerImage from './assets/header.png'

function App() {


  return (
    <>
      <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={headerImage} alt="" className='w-10 h-10' />
        <span className="ml-3 text-xl cursor-pointer">Landing-page</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
        <a className="mr-5 hover:text-gray-900 cursor-pointer">Service</a>
        <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
        <a className="mr-5 hover:text-gray-900 cursor-pointer">Contact</a>
      </nav>
      <button className="inline-flex items-center text-gray-900 bg-white border border-black py-1 px-3 focus:outline-none hover:bg-blue-400 border-none rounded text-base mt-4 md:mt-0">
        Button
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </header>
    </>
  )
}

export default App
