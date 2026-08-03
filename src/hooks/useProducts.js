import { createProduct, deleteProduct, getProducts, getProductsById, updateProduct } from "../services/product.js";
import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Algo deu errado", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    products,
    loading,
    loadProducts,
  };
};

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProduct = async () => {
    if (!id) return;
    try {
      const response = await getProductsById(id);
      setProduct(response.data);
    } catch (error) {
      console.error("Algo deu errado", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  return { product, loading, loadProduct };
};

export const useAddProduct = (data) => {
  const [loading, setLoading] = useState(false);

  const create = async (data) => {
    try {
      setLoading(true);
      const response = await createProduct(data);
      alert("Produto criado");
    } catch (error) {
      console.error("Algo deu errado", error);
    } finally {
      setLoading(false);
    }
  };
  return { create, loading };
};

export const useUpdateProduct = () => {
  const [loading, setLoading] = useState(false);

  const update = async (id, data) => {
    try {
      setLoading(true);
      await updateProduct(id, data);
    } catch (error) {
      console.error("Algo deu errado", error);
    } finally {
      setLoading(false);
    }
  };

  return { update, loading };
};

export const useDeleteProduct = () => {
  const [loading, setLoading] = useState(false);

  const remove = async (id) => {
    try {
      setLoading(true);
      await deleteProduct(id);
    } catch (error) {
      console.error("Algo deu errado", error);
    } finally {
      setLoading(false);
    }
  };

  return { remove, loading };
};
