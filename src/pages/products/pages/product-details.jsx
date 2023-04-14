import { Link, useParams } from 'react-router-dom';
import ProductDetail from '../../../containers/product/product-detail';
import style from '../../styles/product-page.module.css'
const ProductDetailPage = () => {

  const { productId } = useParams();

  return (
    <>
    <div className={style['title-with-link']}>
      <h2>Détail du produit : {productId} </h2>
      <Link to='/products' ><button>Retour à la liste</button></Link>
      <ProductDetail productId={productId}/>

    </div>
    </>
  )
}

export default ProductDetailPage;