import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ProductsPage from "./Products.jsx";
import Contact from "./Contact.jsx";
import NoPage from "./NoPage.jsx";
import './Pages.css'

function Home() {
  return (
    <div className="headerPages">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="blogs" element={<ProductsPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
