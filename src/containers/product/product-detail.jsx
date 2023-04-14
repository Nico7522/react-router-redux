import PriceDisplay from "../../components/price-display/price-display";
import mockup from "./data-mockup.json";

const ProductDetail = ({ productId }) => {
  const product = mockup[productId-1];

  return (
    <>
      <p>
        {product.name} [{product.code}]
      </p>
      <p>
        <PriceDisplay price={product.price} discount={product.discount} />
      </p>
      {!product.inStock && <p>Produit actuellement indisponible</p>}
      <p>{product.description}</p>
    </>
  );
};

export default ProductDetail;
