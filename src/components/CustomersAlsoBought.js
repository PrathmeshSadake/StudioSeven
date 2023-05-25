import React from "react";
import Stripe from "stripe";
import formatPrice from "@/utils/priceFormat";
import Link from "next/link";

const Products = ({ products }) => {
  return (
    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h2 className='text-2xl font-semibold tracking-tight text-gray-900'>
        Customers Also Bought
      </h2>

      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {products.map((product) => (
          <div key={product.id} className='group relative'>
            <div className='min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96'>
              <img
                src={product.image}
                alt={product.name}
                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
              />
            </div>
            <div className='mt-4 flex justify-between space-x-8'>
              <div>
                <h3 className='text-sm text-gray-700'>
                  <Link href={`/product/${product.id}`}>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {product.name}
                  </Link>
                </h3>
              </div>
              <p className='text-sm font-medium text-gray-900'>
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
