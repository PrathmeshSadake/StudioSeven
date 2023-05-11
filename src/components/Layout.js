import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Perks from "./Perks";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Perks />
      <Footer />
    </div>
  );
};

export default Layout;
