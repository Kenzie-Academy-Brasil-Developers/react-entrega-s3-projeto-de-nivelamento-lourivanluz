import { useState } from "react";
import { DivStyled } from "./style";
export const Form = ({ setProducts, products }) => {
  const [codigo, setCodigo] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const creatObj = (codigo, name, description, price, discount) => {
    const product = {
      code: codigo,
      name: name,
      description: description,
      price: price,
      discount: discount,
    };
    setProducts([...products, product]);
  };

  return (
    <DivStyled>
      <input
        type="text"
        placeholder="código"
        value={codigo}
        onChange={(event) => setCodigo(event.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <input
        type="text"
        placeholder="discount"
        value={discount}
        onChange={(event) => setDiscount(event.target.value)}
      />

      <button
        onClick={() => creatObj(codigo, name, description, price, discount)}
      >
        cadastrar
      </button>
    </DivStyled>
  );
};
