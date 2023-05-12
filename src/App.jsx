import React from 'react'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Products from './components/Products'
import Cart from './pages/Cart'
import Home from './pages/Home'
import "./App.css"
import {BrowserRouter as Router , Routes ,Route, Navigate, } from "react-router-dom";
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Success from './pages/Success'
import { useSelector } from 'react-redux'

const App = () =>{
  const user = useSelector((state)=> state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/products/:category' element={<ProductList/>}/>
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/success' element={<Success/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}
         <Route 
         path='/login'
         element={ user ? ( <Navigate replace to="/"/>) : (<Login/>)} 
         />
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App