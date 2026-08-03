import { useState } from "react";
import { useProducts, useProduct, useUpdateProduct, useDeleteProduct } from "../../hooks/useProducts.js";
import { ProductForm } from "../../components/ProductForm/index.jsx";
import trashIcon from "../../assets/site/trash.svg";
import editIcon from "../../assets/site/edit.svg";
import "./style.css";

export const ProductList = () => {
  const { products, loading, loadProducts } = useProducts();
  const { remove } = useDeleteProduct();
  const { update } = useUpdateProduct();
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchId, setSearchId] = useState("");
  const { product, loading: loadingProduct } = useProduct(searchId);

  const handleDelete = async (id) => {
    await remove(id);
    loadProducts();
  };

  const handleUpdate = async (data) => {
    await update(editingProduct.id, data);
    setEditingProduct(null);
    loadProducts();
  };

  return (
    <div className="products-page">
      <h2>Produtos</h2>

      {editingProduct && <ProductForm initialData={editingProduct} onSubmit={handleUpdate} />}

      <input
        className="search-input"
        type="number"
        min={1}
        placeholder="Buscar por Id..."
        value={searchId}
        onChange={(event) => setSearchId(event.target.value)}
      />

      {searchId && (
        <div className="search-result">
          {loadingProduct && <p>Buscando...</p>}

          {!loadingProduct && product && (
            <p>
              Nome do produto: {product.description} - Quantidade: {product.quantity} - Usuário: {product.created_by} -
              Preço{" "}
              {Number(product.price).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}{" "}
              - Data: {product.created_at}
            </p>
          )}

          {!loadingProduct && !product && <p className="not-found">Produto não encontrado.</p>}
        </div>
      )}

      <div className="table-wrapper">
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Data de cadastro</th>
              <th>Usuário</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{new Date(product.created_at).toLocaleDateString()}</td>
                <td>{product.created_by}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>
                  {Number(product.price).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="actions">
                  <button className="edit-button" onClick={() => setEditingProduct(product)}>
                    <img src={editIcon} alt="Editar produto" />
                  </button>

                  <button className="delete-button" onClick={() => handleDelete(product.id)}>
                    <img src={trashIcon} alt="Excluir produto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
