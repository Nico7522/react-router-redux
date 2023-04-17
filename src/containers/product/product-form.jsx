import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { useId } from "react";
import { useDispatch } from 'react-redux'
import { productCreate } from "../../store/actions/product.action";

const productSchema = yup
  .object({
    name: yup.string().trim().required(),
    code: yup
      .string()
      // .matches(/^[a-z]{4}[0-9]{3}$/i)
      .required(),
    description: yup.string(),
    price: yup.number().positive().required(),
    discount: yup.number().transform((value, original) => original === '' ? null : value).positive().nullable(),
    inStock: yup.boolean().required(),
  })
  .required();



const ProductForm = () => {
  const dispatch = useDispatch();
  const  {
    register,
    handleSubmit,
    formState: { errors }, 
    reset
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {name: '', code: '', description: '', price: '', discount: '', inStock: true},
  });
  const navigate = useNavigate();
  const idForm = useId();

  const handleProductSubmit = (product) => {
    // TODO Use store to add product
    console.log(product);
    dispatch(productCreate(product))
    navigate("/products");
    
  };

  const handleProductReset = (e) => {
    // TODO
    e.preventDefault()
    reset();
  }
  return (
    <form onSubmit={handleSubmit(handleProductSubmit)}
          onReset={handleProductReset}>
      <div>
        <label htmlFor={idForm+'name'}>Nom</label>
        <input id={idForm+'name'} type="text" {...register('name')} />
        { errors.name && ( <span>{errors.name.message}</span>) }
      </div>
      <div>
        <label htmlFor={idForm+'code'}>Code</label>
        <input id={idForm+'code'} type="text" {...register('code')} />
        { errors.code && ( <span>{errors.code.message}</span>) }
      </div>
      <div>
        <label htmlFor={idForm+'desc'}>Description</label>
        <textarea name="" id={idForm+'desc'} {...register('description')}></textarea>
        { errors.description && ( <span>{errors.description.message}</span>) }
      </div>
      <div>
        <label htmlFor={idForm+'prix'}>Prix</label>
        <input id={idForm+'prix'} type="text" {...register('price')} />
        { errors.price && ( <span>{errors.price.message}</span>) }
      </div>
      <div>
        <label htmlFor={idForm+'discount'}>Reduction</label>
        <input id={idForm+'discount'} type="text" {...register('discount')} />
        { errors.discount && ( <span>{errors.discount.message}</span>) }
      </div>
      <div>
        <label htmlFor={idForm+'stock'}>Stock</label>
        <input id={idForm+'stock'} type="checkbox" {...register('inStock')} />
        { errors.inStock && ( <span>{errors.inStock.message}</span>) }
      </div>
      <div>
        <button type="submit">Ajouter</button>
        <button type="reset">Effacer le formulaire</button>
      </div>
    </form>
  );
};

export default ProductForm;
