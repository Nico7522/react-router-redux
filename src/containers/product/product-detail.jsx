import PriceDisplay from "../../components/price-display/price-display";
import mockup from "./data-mockup.json";
import { useSelector } from 'react-redux'

const ProductDetail = ({ productId }) => {
  
  const product = useSelector(state => state.product.products.find(p => p.id === productId));

  if (!product) {
    return <p>Produit non trouvé</p>
  }
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
