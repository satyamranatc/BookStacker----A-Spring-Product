import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Grid3X3, BookOpen, ArrowRight } from 'lucide-react';

export default function Category() {

    let [categories,setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/category/list").then((response) => {
            setCategories(response.data);
        });
    },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg mb-6">
                    <Grid3X3 className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    Book Categories
                </h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Explore our diverse collection of books organized by categories to find your next great read.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <div key={category.CategoryId} className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-white/50">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center mr-4">
                                <BookOpen className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                {category.CategoryName}
                            </h2>
                        </div>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {category.CategoryDesc}
                        </p>
                        <button className="group/btn w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                            <span>Browse Books</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}