
import { createSlice } from '@reduxjs/toolkit';
import productsData from '../products';

const initialState = {
    products: productsData,
    filteredProducts: productsData,
    filters: {
        color: '',
        type: '',
        price: '',
    },
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        applyFilter: (state, action) => {
            const { color, type, price } = action.payload;
            let filteredProducts = state.products;

            if (color) {
                filteredProducts = filteredProducts.filter(
                    (product) => product.color === color
                );
            }

            if (type) {
                filteredProducts = filteredProducts.filter(
                    (product) => product.type === type
                );
            }

            if (price) {
                filteredProducts = filteredProducts.filter(
                    (product) => product.price === price
                );
            }

            state.filteredProducts = filteredProducts;
            state.filters = {
                color,
                type,
                price,
            };
        },
        resetFilter: (state) => {
            state.filteredProducts = state.products;
            state.filters = {
                color: '',
                type: '',
                price: '',
            };
        },
    },
});

export const { applyFilter, resetFilter } = productSlice.actions;
export default productSlice.reducer;
