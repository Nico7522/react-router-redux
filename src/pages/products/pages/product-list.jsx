import { Link } from 'react-router-dom';
import ProductPage from '../../../containers/product/product-page';

const ProductList = () => {
    return (
        <>
        <h1>Liste des produits : </h1>
        <ProductPage />

  
        <hr />
        <div>
          {/* Chemin relatif */}
          <Link to='13'>Product 13</Link>
        </div>
        <div>
          {/* Chemin absolue */}
          <Link to='/product/42'>Product 42</Link>
        </div>
        <div>
          {/* Chemin absolue */}
          <Link to='create'>Créer un produit</Link>
        </div>
  
      </>
    )
}

export default ProductList