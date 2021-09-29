import { Cards } from "../Cards";
import { UlStyled } from "./style";

export const ProductList = ({ products }) => {
  return (
    <UlStyled style={{ listStyle: "none" }}>
      {products.map((item, index) => (
        <li key={index}>
          <Cards item={item} />
        </li>
      ))}
    </UlStyled>
  );
};
