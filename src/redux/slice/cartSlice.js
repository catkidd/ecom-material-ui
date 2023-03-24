import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartProduct",
  initialState: {
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
  },
  reducers: {
    addToCart(state, action) {
        console.log(action.payload)
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.price = action.payload.price;
      state.description = action.payload.description;
      state.image = action.payload.image;
    },
    // removeCart() {}
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
