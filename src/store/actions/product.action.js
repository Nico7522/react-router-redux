import { createAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';
// Création d'un produit 
export const productCreate = createAction('product/create', (product) => {
    // Renvoi un object avec le payload
    return {
        payload: {...product,
        id: nanoid()
    }
    };
});



// Suppression
export const productDelete = createAction('product/delete')