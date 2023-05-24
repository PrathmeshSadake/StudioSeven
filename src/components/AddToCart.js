import React from "react";
import { toast } from "react-hot-toast";

import useCartStore from "@/store";

const AddToCart = ({ product, quantity }) => {
  const cartStore = useCartStore();
  const { id, name, price, image } = product;
  const handleAddToCart = () => {
    cartStore.addProduct({ id, name, price, image, quantity });
    toast.success(`${name} added to cart`);
  };
  return (
    <button
      onClick={handleAddToCart}
      className='bg-gray-900 text-white
      tracking-widest rounded-md px-5 py-2 text-sm font-medium'
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
