import React from "react";
import { useQuery } from "urql";
import LoadingScreen from '../components/LoadingScreen';

import Product from "../components/Product";
import { PRODUCT_QUERY } from "../lib/query";

const products = () => {
  const [result, reexecuteQuery] = useQuery({
    query: PRODUCT_QUERY,
  });

  const { data, fetching, error } = result;

  if (fetching) return <LoadingScreen />;
  if (error)
    return <p className='text-xl font-semibold'>Oh no... {error.message}</p>;

  return (
    <div className='mx-auto max-w-7xl pt-20 pb-32 sm:pt-48 sm:pb-40'>
      <h1 className='text-3xl font font-semibold tracking-tight text-gray-900 sm:text-4xl'>
        BEST OF STUDIO SEVEN EXCLUSIVE
      </h1>
      <div className='my-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {data.products.data.map(({ attributes }) => (
          <Product product={attributes} />
        ))}
      </div>
    </div>
  );
};

export default products;
