import React from "react";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Product from "./Product";

const ProductsGrid = ({ productNotToShow }) => {
  const [result] = useQuery({
    query: PRODUCT_QUERY,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p className='text-xl font-semibold'>Loading...</p>;
  if (error)
    return <p className='text-xl font-semibold'>Oh no... {error.message}</p>;

  return (
    <div>
      <div className='my-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {data.products.data
          .filter((product) => product.attributes.slug !== productNotToShow)
          .map(({ attributes }) => (
            <Product product={attributes} />
          ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
