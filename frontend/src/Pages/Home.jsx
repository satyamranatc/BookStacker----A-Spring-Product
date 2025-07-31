import React from 'react';
import { Book, Search, Users, Star, ArrowRight, BookOpen, Heart, TrendingUp } from 'lucide-react';

export default function Home() {
  const featuredBooks = [
    {
      id: 1,
      title: "The Art of Reading",
      author: "Sarah Mitchell",
      category: "Self-Help",
      rating: 4.8,
      image: "📚",
      color: "from-emerald-100 to-teal-100"
    },
    {
      id: 2,
      title: "Digital Mysteries",
      author: "James Parker",
      category: "Mystery",
      rating: 4.6,
      image: "🔍",
      color: "from-blue-100 to-indigo-100"
    },
    {
      id: 3,
      title: "Garden of Stories",
      author: "Maria Rodriguez",
      category: "Fiction",
      rating: 4.9,
      image: "🌿",
      color: "from-purple-100 to-pink-100"
    }
  ];

  const stats = [
    { icon: Book, label: "Total Books", value: "2,847", color: "text-emerald-600" },
    { icon: Users, label: "Active Readers", value: "1,234", color: "text-teal-600" },
    { icon: BookOpen, label: "Categories", value: "24", color: "text-blue-600" },
    { icon: Star, label: "Avg Rating", value: "4.7", color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg mb-6">
              <Book className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Welcome to BookStacker
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Your personal gateway to endless stories, knowledge, and adventures. 
              Discover, organize, and enjoy your reading journey like never before.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Browse Books</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-lg font-semibold border border-slate-200/50 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>View Categories</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-white/50">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color === 'text-emerald-600' ? 'from-emerald-100 to-emerald-200' : stat.color === 'text-teal-600' ? 'from-teal-100 to-teal-200' : stat.color === 'text-blue-600' ? 'from-blue-100 to-blue-200' : 'from-purple-100 to-purple-200'} mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Featured Books</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover our hand-picked selection of amazing reads across various genres and topics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <div key={book.id} className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/50">
                <div className={`w-full h-48 bg-gradient-to-br ${book.color} rounded-lg mb-6 flex items-center justify-center text-6xl shadow-inner`}>
                  {book.image}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                      {book.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-slate-600">{book.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-slate-600">by {book.author}</p>
                  <button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Ready to Start Reading?</h2>
              <p className="text-slate-600">
                Join thousands of book lovers who have discovered their next favorite read through BookStacker.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <button className="group p-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Explore All Books</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group p-4 bg-white text-slate-700 rounded-xl font-medium border border-slate-200/50 hover:bg-slate-50 hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Browse Categories</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}