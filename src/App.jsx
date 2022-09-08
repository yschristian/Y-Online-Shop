import React from 'react'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Products from './components/Products'
import Cart from './pages/Cart'
import Home from './pages/Home'
import {BrowserRouter as Router , Routes ,Route, } from "react-router-dom";
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'

const App = () =>{
  const user = true
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/products/:category' element={<ProductList/>}/>
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App