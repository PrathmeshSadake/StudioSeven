import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      // increaseCartItem: () => set((state) => ({ bears: state.bears + 1 })),
      // decreaseCartItem: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllCartItems: () => set({ cartItems: [] }),
    }),

    {
      name: "cart-items", // name of the item in the storage (must be unique)
    }
  )
);

export default useCartStore;
