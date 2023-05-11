import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      addProduct: (item) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (product) => product.id === item.id
          );
          if (existingItem) {
            const updatedCartItems = state.cartItems.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
              }
              return cartItem;
            });
            return { cartItems: updatedCartItems };
          } else {
            return {
              cartItems: [...state.cartItems, { ...item, quantity: 1 }],
            };
          }
        }),
      removeProduct: (item) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (product) => product.id === item.id
          );
          if (existingItem && existingItem.quantity > 1) {
            const updatedCartItems = state.cartItems.map((cartItem) => {
              if (cartItem.id === item.id) {
                return {
                  ...cartItem,
                  quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 0,
                };
              }
              return cartItem;
            });
            return { cartItems: updatedCartItems };
          } else {
            const filteredCartItems = state.cartItems.filter(
              (cartItem) => cartItem.id !== item.id
            );
            return { cartItems: filteredCartItems };
          }
        }),
    }),

    {
      name: "cart-items", // name of the item in the storage (must be unique)
    }
  )
);

export default useCartStore;
