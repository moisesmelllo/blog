'use client'

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen ] = useState(false)

  return (
    <div className='flex flex-col md:flex-row justify-between px-8 py-4 text-xl md:text-2xl'>
      <h1>Nordic Rose</h1>
        <div className='flex justify-end items-start border md:border-none shadow-2xl md:shadow-none p-2 mt-3 md:mt-0 md:p-0 '>
          <nav className={`${menuOpen ? 'block' : 'hidden'} md:block mr-14 md:mr-0`}>
            <ul className='space-y-2 md:space-x-4 md:space-y-0 flex flex-col md:flex-row md:justify-center md:items-center w-80'>
              <Link className='cursor-pointer border-b-2 md:border-b-0' href='/'>Blog</Link>
              <Link className='cursor-pointer border-b-2 md:border-b-0' href='/'>About</Link>
              <Link className='cursor-pointer border-b-2 md:border-b-0' href='/'>Links</Link>
              <Link  className='cursor-pointer border-b-2 md:border-b-0' href='/'>Projects</Link>
            </ul>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`cursor-pointer block md:hidden`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          
        </div>
    </div>
  )
}

export default Header