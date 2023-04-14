import { Link, useParams } from 'react-router-dom';
import ProductDetail from '../../../containers/product/product-detail';
import style from '../../styles/product-page.module.css';
import ProductForm from '../../../containers/product/product-form';

const ProductCreatePage = () => {

  const { productId } = useParams();

  return (
    <>
    <div className={style['title-with-link']}>
        <h2>
            Ajouter un nouveau produit
        </h2>
        <Link to='/products'><button>Retour à la liste</button></Link>
        <ProductForm />
    </div>
    </>
  )
}

export default ProductCreatePage;