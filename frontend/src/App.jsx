import React from 'react'

import NavBar from './Components/NavBar.jsx'

import Home from "./Pages/Home.jsx"
import Category from "./Pages/Category.jsx"
import Books from "./Pages/Books.jsx"
import Admin from "./Pages/Admin.jsx"

import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/books" element={<Books />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
