import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const { produto } = React.useContext(GlobalContext);

  if (!produto) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {produto.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
