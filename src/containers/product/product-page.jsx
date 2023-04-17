import { useCallback } from "react";
import PriceDisplay from "../../components/price-display/price-display";
import { useNavigate } from "react-router-dom";
import style from "./product.module.css";
import { useSelector, useDispatch } from "react-redux";
import { productDelete } from "../../store/actions/product.action";
const ProductTableHead = () => (
  <thead>
    <tr>
      <th>Nom</th>
      <th>Code</th>
      <th>Prix</th>
      <th>En stock</th>
      <th></th>
    </tr>
  </thead>
);

const ProductTableRow = ({
  name,
  code,
  price,
  inStock,
  discount,
  onDetail,
  onRemove,
  id,
}) => (
  <tr>
    <td onClick={() => onDetail(id)}>{name}</td>
    <td onClick={() => onDetail(id)}>{code}</td>
    <td>
      <PriceDisplay price={price} discount={discount} />
    </td>
    <td>{inStock ? "v" : "X"}</td>
    <td>
      {/* <button >Détails</button> */}
      <button onClick={() => onRemove(id)}>Supprimer</button>
    </td>
    <td></td>
  </tr>
);

const ProductPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const handleDetail = useCallback((id) => {
    // TODO
    navigate("/products/" + id);
  });
  const handleRemove = useCallback((id) => {
    console.log(products);
    const actionDelete = productDelete(id);
    dispatch(actionDelete);
  });

  return (
    <table className={style["product-table"]}>
      <ProductTableHead />
      <tbody>
        {products.map((product) => (
          <ProductTableRow
            {...product}
            key={product.id}
            onDetail={handleDetail}
            onRemove={handleRemove}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductPage;
