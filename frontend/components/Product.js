import React from "react";
import Link from "next/link";

const Product = ({ product }) => {
  const { title, description, slug, price, image } = product;
  return (
    <div key={slug} className='group relative'>
      <Link href={`/product/${slug}`}>
        <div className='cursor-pointer min-h-80 aspect-w-0.8 aspect-h-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:aspect-none lg:h-96'>
          <img
            src={image.data.attributes.formats.medium.url}
            alt={title}
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          />
        </div>
      </Link>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='cursor-pointer text-sm text-gray-700'>
            <Link href={`/product/${slug}`}>{product.title}</Link>
          </h3>
        </div>
        <p className='text-sm font-medium text-gray-900'>{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
