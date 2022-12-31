import React from "react";

const Product = ({ product }) => {
  const { title, description, slug, price, image } = product;
  return (
    <div key={slug} className='group relative'>
      <div className='min-h-80 aspect-w-0.8 aspect-h-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:aspect-none lg:h-96'>
        <img
          src={image.data.attributes.formats.medium.url}
          alt={title}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <span aria-hidden='true' className='absolute inset-0' />
            {product.title}
          </h3>
        </div>
        <p className='text-sm font-medium text-gray-900'>{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
