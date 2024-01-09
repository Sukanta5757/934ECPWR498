import React from 'react';
import Signupage from './pages/Signupage';
import Signpage from './pages/Signpage';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCartPage from './pages/ShoppingCartPage';
import Errorpage from './pages/Errorpage';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/signupage" element={<Signupage/>} />
        <Route path="/Signpage" element={<Signpage/>} />
        <Route path="/shoppingcartpage" element={<ShoppingCartPage/>} />
        <Route path="*" element={<Errorpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
