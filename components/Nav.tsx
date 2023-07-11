'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Dog Gallery</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <div className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Gallery
            </div>
          </Link>
          <Link href="/favorites">
            <div className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">
              Favorites
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
