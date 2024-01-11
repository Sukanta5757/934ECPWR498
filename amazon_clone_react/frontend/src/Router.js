import React from 'react';
import Signupage from './pages/Signupage';
import Signpage from './pages/Signpage';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCartPage from './pages/ShoppingCartPage';
import Errorpage from './pages/Errorpage';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import OrderReturnpage from './pages/OrderReturnpage';


function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/signupage" element={<Signupage/>} />
        <Route path="/Signpage" element={<Signpage/>} />
        <Route path="/shoppingcartpage" element={<ShoppingCartPage/>} />
        <Route path="/OrderReturnpage" element={<OrderReturnpage/>} />
        <Route path="*" element={<Errorpage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Router;
