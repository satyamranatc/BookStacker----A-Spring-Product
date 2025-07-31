import React, { useState } from 'react';
import { Book, Home, Grid3X3, Library, Settings, Menu, X } from 'lucide-react';

// Mock Link component for demonstration
const Link = ({ to, children, className = "" }) => (
  <a href={to} className={className} onClick={(e) => e.preventDefault()}>
    {children}
  </a>
);

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 shadow-lg border-b border-indigo-200/50 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-200">
              <Book className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
              BookStacker
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-1">
              <li>
                <Link 
                  to="/" 
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-emerald-100/60 transition-all duration-200 group"
                >
                  <Home className="h-4 w-4 group-hover:text-emerald-600 transition-colors" />
                  <span className="font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/category" 
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-teal-100/60 transition-all duration-200 group"
                >
                  <Grid3X3 className="h-4 w-4 group-hover:text-teal-600 transition-colors" />
                  <span className="font-medium">Category</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/books" 
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-blue-100/60 transition-all duration-200 group"
                >
                  <Library className="h-4 w-4 group-hover:text-blue-600 transition-colors" />
                  <span className="font-medium">Books</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin" 
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 transition-all duration-200 group border border-emerald-300/50 hover:border-emerald-400/70 shadow-sm"
                >
                  <Settings className="h-4 w-4 group-hover:text-white transition-colors" />
                  <span className="font-medium">Admin</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-600 hover:text-slate-800 p-2 rounded-lg hover:bg-slate-100/80 transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-indigo-200/50 bg-white/80 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="flex items-center space-x-3 px-3 py-3 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-emerald-100/60 transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5 group-hover:text-emerald-600 transition-colors" />
                <span className="font-medium">Home</span>
              </Link>
              <Link
                to="/category"
                className="flex items-center space-x-3 px-3 py-3 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-teal-100/60 transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Grid3X3 className="h-5 w-5 group-hover:text-teal-600 transition-colors" />
                <span className="font-medium">Category</span>
              </Link>
              <Link
                to="/books"
                className="flex items-center space-x-3 px-3 py-3 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-blue-100/60 transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Library className="h-5 w-5 group-hover:text-purple-400 transition-colors" />
                <span className="font-medium">Books</span>
              </Link>
              <Link
                to="/admin"
                className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 group border border-purple-500/30 hover:border-purple-400/50 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Settings className="h-5 w-5 group-hover:text-white transition-colors" />
                <span className="font-medium">Admin</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}