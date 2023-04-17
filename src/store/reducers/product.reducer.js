import { createReducer } from '@reduxjs/toolkit'
import { productCreate, productDelete } from '../actions/product.action';
// Définition de l'était initial du store (categorie 'product')

const initialState = {
    products: [{
        "id": 1,
        "name": "product 1",
        "code": "eee5896",
        "description": "le produit 1",
        "price": 42,
        "discount": null,
        "inStock": true

    }],
    count: 1
};

// Définition du reducer qui permet de résoudre les actions 

const productReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(productCreate, (state, action) => {
        return {
            ...state,
            count: state.count+1,
            products: [...state.products, action.payload]
        }
    })
    .addCase(productDelete, (state, action) => {
        const productId = action.payload
        const products = state.products.filter(p => (p.id !== productId.id))
        return {
            ...state,
            count: products.length,
            products
        }
    })
})

export default productReducer;

