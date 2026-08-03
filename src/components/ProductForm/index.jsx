import { useState } from "react";
import "./style.css";

export const ProductForm = ({ onSubmit, initialData }) => {
  const [createdBy, setCreatedBy] = useState(initialData?.created_by || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [quantity, setQuantity] = useState(initialData?.quantity || "");
  const [price, setPrice] = useState(initialData?.price || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      created_by: createdBy,
      description,
      quantity,
      price,
    });

    if (!initialData) {
      setCreatedBy("");
      setDescription("");
      setQuantity("");
      setPrice("");
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Criar Produto</h2>
      <label>Usuário</label>
      <input
        type="text"
        required
        name="created_by"
        placeholder="Exemplo: Igor..."
        value={createdBy}
        onChange={(event) => setCreatedBy(event.target.value)}
      />

      <label>Descrição</label>
      <input
        type="text"
        required
        name="description"
        placeholder="Exemplo: Playstation 5..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <label>Quantidade</label>
      <input
        type="number"
        required
        name="quantity"
        placeholder="Exemplo: 1.."
        min={1}
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />

      <label>Preço</label>
      <input
        type="number"
        required
        step="0.01"
        name="price"
        min={1}
        placeholder="Exemplo: R$3.800..."
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <button type="submit">Salvar</button>
    </form>
  );
};
