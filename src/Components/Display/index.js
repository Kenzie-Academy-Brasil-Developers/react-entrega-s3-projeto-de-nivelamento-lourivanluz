export const Display = ({ products }) => {
  const totalPrice = products.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );
  const discount = products.reduce(
    (acc, item) => acc + Number(item.discount),
    0
  );
  return (
    <div>
      <p>preço total: {totalPrice}</p>
      <p>Valor economizado: {discount}</p>
    </div>
  );
};
