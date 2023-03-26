import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import OrderHistory from "./pages/OrderHistory";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<OrderHistory />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
