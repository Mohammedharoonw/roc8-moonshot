import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const index = state.findIndex((i) => i.id === item.id);

      if (index === -1) {
        // If the item doesn't exist in the cart, add it multiple times based on the count value
        for (let i = 0; i < item.count; i++) {
          state.push({ ...item, quantity: 1 });
        }
      } else {
        // If the item exists in the cart, update its quantity value
        state[index].quantity += item.count;
      }
    },
  },
});


export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
