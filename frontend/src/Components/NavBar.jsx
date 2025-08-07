import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            BookStacker
          </h2>
          
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/category" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
                Category
              </Link>
            </li>
            <li>
              <Link to="/books" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                Books
              </Link>
            </li>
            <li>
              <Link to="/admin" className="text-slate-600 hover:text-purple-600 font-medium transition-colors">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}