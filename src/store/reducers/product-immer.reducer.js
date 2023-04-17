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

const productReducerImmer = createReducer(initialState, (builder) => {
    builder
    .addCase(productCreate, (state, action) => {
        state.products.push(action.payload);
        state.count++
    })
    .addCase(productDelete, (state, action) => {
        const productId = action.payload;

        state.products = state.products.filter(product => product.id !== productId.id )
        state.count = state.products.length
     
    })
})

export default productReducerImmer;