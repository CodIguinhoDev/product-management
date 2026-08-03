import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductList } from "./pages/ProductList/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { Home } from "./pages/Home/index.jsx";
import { Footer } from "./components/Footer/index.jsx";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ProductList />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
