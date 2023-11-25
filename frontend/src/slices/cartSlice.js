
import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from "../utils/cartUtils";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existItem = state.cartItems.find(item => item.id === newItem.id);

            if (existItem) {
                state.cartItems = state.cartItems.map((x) =>
                    x.id === existItem.id ? newItem : x)
            } else {
                state.cartItems = [...state.cartItems, newItem]
            }

            return updateCart(state);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
            return updateCart(state);
        },
    },
});

export const { addToCart , removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
