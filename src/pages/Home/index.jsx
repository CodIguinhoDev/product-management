import { useProducts, useAddProduct } from "../../hooks/useProducts";
import { ProductForm } from "../../components/ProductForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";

export const Home = () => {
  const { create } = useAddProduct();
  const { loadProducts } = useProducts();

  const handleCreate = async (data) => {
    await create(data);
    loadProducts();
  };

  return (
    <>
      <main className="home">
        <ProductForm onSubmit={handleCreate} />
        <div className="link-container">
          <Link className="products-link" to="/produtos">
            Veja os seus produtos
          </Link>
        </div>
      </main>
    </>
  );
};
