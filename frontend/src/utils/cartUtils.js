export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
};

export const updateCart = (state) => {
    //calculate the items Price
    state.itemPrice = addDecimals(state.cartItems.reduce((acc, newItem) => acc + newItem.price * newItem.qty, 0));
    state.totalPrice = (Number(state.itemPrice)).toFixed(2);
    localStorage.setItem('cart', JSON.stringify(state))
    return state;
};
