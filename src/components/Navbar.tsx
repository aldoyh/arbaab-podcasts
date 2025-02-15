import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Headphones } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--secondary)] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <Headphones className="h-8 w-8 text-indigo-500" />
            <span className="text-xl font-bold">بودكاست</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 space-x-reverse">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن البودكاست..."
                className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="btn-primary">تسجيل الدخول</button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="ابحث عن البودكاست..."
                className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg w-full"
              />
              <button className="btn-primary w-full">تسجيل الدخول</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;