'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: 'Contact us', url: 'mailto:workflipp@gmail.com' },
    { text: 'Blogs', url: '/' },
    { text: 'About', url: '/' },
  ];

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 border-b border-gray-200">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center gap-2 font-bold">
                <div className="text-black font-bold text-lg">
                 Career <span className='bg-black py-1 px-1 rounded-md text-white'>.ai</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex">
              <div className="flex gap-4 text-black py-2 px-4">
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.url}>
                    <div className="hover:text-gray-600 text-base">{item.text}</div>
                  </Link>
                ))}
              </div>
              <Link href="/auth/signin">
                <div className="bg-black text-white py-2 px-4 hover:bg-gray-800 rounded-full">
                  Sign In
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 absolute z-20 w-full h-screen bg-white space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.url}>
                <div className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                  {item.text}
                </div>
              </Link>
            ))}
            <Link href="/auth/signin">
              <div className="bg-black text-white block px-3 py-2 text-base font-medium rounded-full">
                Sign In
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;