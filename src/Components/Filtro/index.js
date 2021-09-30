import { useState } from "react";
import { ProductList } from "../ProductList";

export const Filtro = ({ products }) => {
  const [filtroName, setFiltroName] = useState("");
  const [itemFiltrado, setItemFiltrado] = useState([]);

  const pesquisar = () => {
    const filtred = products.filter((item) => item.code === Number(filtroName));
    console.log(filtred);
    setItemFiltrado(filtred);
  };

  return (
    <div>
      <input
        type="text"
        value={filtroName}
        onChange={(event) => setFiltroName(event.target.value)}
        placeholder="Digite o codigo"
      />
      <button onClick={pesquisar}>Pesquisar</button>
      <ProductList products={itemFiltrado} />
    </div>
  );
};
