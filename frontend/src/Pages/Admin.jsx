import React, { useState, useEffect } from 'react'


function CategoryAdmin() {
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);

    let data = {
      "CategoryId": e.target[0].value,
      "CategoryName": e.target[1].value,
      "CategoryDesc": e.target[2].value,
    }
    // await axios.post("http://localhost:8080/api/category/add", data);
    console.log("Done", data);
  }


  return (
    <div className='mt-20 p-6 bg-gradient-to-br from-slate-50 to-emerald-50 rounded-xl shadow-sm'>
      <h2 className='text-2xl font-semibold text-slate-700 mb-6 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
        Add New Category
      </h2>
      
      <div onSubmit={handleSubmit} className='flex flex-col max-w-md mx-auto space-y-4'>
        <input 
          className='py-3 px-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all duration-200 bg-white/80' 
          type="number" 
          placeholder='Category ID' 
        />
        <input 
          className='py-3 px-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all duration-200 bg-white/80' 
          type="text" 
          placeholder='Category Name' 
        />
        <input 
          className='py-3 px-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all duration-200 bg-white/80' 
          type="text" 
          placeholder='Category Description' 
        />
        <button 
          onClick={handleSubmit}
          className="group/btn w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          Add Category
        </button>
      </div>
    </div>
  )
}


function BookAdmin() {
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);

    let data = {
      "BookId": e.target[0].value,
      "BookName": e.target[1].value,
      "BookDesc": e.target[2].value,
    }
    // await axios.post("http://localhost:8080/api/book/add", data);
    console.log("Done", data);
  }


  return (
    <div className='mt-20 p-6 bg-gradient-to-br from-slate-50 to-teal-50 rounded-xl shadow-sm'>
      <h2 className='text-2xl font-semibold text-slate-700 mb-6 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
        Add New Book
      </h2>
      
      <div onSubmit={handleSubmit} className='flex flex-col max-w-md mx-auto space-y-4'>
        <input 
          className='py-3 px-4 rounded-xl border-2 border-teal-200 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-200 bg-white/80' 
          type="number" 
          placeholder='Book ID' 
        />
        <input 
          className='py-3 px-4 rounded-xl border-2 border-teal-200 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-200 bg-white/80' 
          type="text" 
          placeholder='Book Name' 
        />
        <input 
          className='py-3 px-4 rounded-xl border-2 border-teal-200 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-all duration-200 bg-white/80' 
          type="text" 
          placeholder='Book Description' 
        />
        <button 
          onClick={handleSubmit}
          className="group/btn w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          Add Book
        </button>
      </div>
    </div>
  )
}


export default function Admin() {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-100 to-emerald-100 pt-20'>
      <div className='container mx-auto px-4'>
        <div className="max-w-2xl mx-auto">
          <div className="flex bg-white rounded-lg shadow-md mb-8 p-1">
            <button
              onClick={() => setActiveTab(0)}
              className={`flex-1 py-3 px-6 text-center font-medium rounded-md cursor-pointer transition-all duration-200 focus:outline-none ${
                activeTab === 0 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md' 
                  : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              Category Admin
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`flex-1 py-3 px-6 text-center font-medium rounded-md cursor-pointer transition-all duration-200 focus:outline-none ${
                activeTab === 1 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md' 
                  : 'text-slate-600 hover:text-teal-600'
              }`}
            >
              Book Admin
            </button>
          </div>

          <div>
            {activeTab === 0 && <CategoryAdmin />}
            {activeTab === 1 && <BookAdmin />}
          </div>
        </div>
      </div>
    </div>
  )
}