import { createSlice } from "@reduxjs/toolkit";

import { UsersData } from "../DummyData";

export const userSlice = createSlice({
  name: "users",
  initialState: { 
    value: UsersData,
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
      alert("Added new user at last page")
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.customer_name = action.payload.customer_name;
        }
      });
    },

    updateEmail: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.customer_email = action.payload.customer_email;
        }
      });
    },

    updateProduct: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.product = action.payload.product;
        }
      });
    },

    updateQty: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.quantity = action.payload.quantity;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUsername, updateEmail, updateProduct, updateQty } = userSlice.actions;
export default userSlice.reducer;
