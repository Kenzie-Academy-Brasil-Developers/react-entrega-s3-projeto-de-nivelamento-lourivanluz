import { DivStyled } from "./style";

export const Cards = ({ item: { name, price, discount } }) => {
  return (
    <DivStyled>
      <h1>item :{name}</h1>
      <p> preço total: {price}</p>
      <p> disconto:{discount}</p>
    </DivStyled>
  );
};
