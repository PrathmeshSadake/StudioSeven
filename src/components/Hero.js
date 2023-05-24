import Link from "next/link";
import React from "react";
const Hero = () => {
  return (
    <div className='relative'>
      <div
        aria-hidden='true'
        className='absolute inset-0 hidden sm:flex sm:flex-col'
      >
        <div className='relative w-full flex-1 bg-gray-800'>
          <div className='absolute inset-0 overflow-hidden'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg'
              alt=''
              className='h-full w-full object-cover object-center'
            />
          </div>
          <div className='absolute inset-0 bg-gray-900 opacity-50' />
        </div>
      </div>

      <div className='relative mx-auto max-w-3xl px-4 text-center sm:px-6 sm:pb-0 lg:px-8'>
        <div
          aria-hidden='true'
          className='absolute inset-0 flex flex-col sm:hidden'
        >
          <div className='relative w-full flex-1 bg-gray-800'>
            <div className='absolute inset-0 overflow-hidden'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg'
                alt=''
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='absolute inset-0 bg-gray-900 opacity-50' />
          </div>
        </div>
        <div className='relative py-32'>
          <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>
            Mid-Season Sale
          </h1>
          <div className='mt-4 sm:mt-6'>
            <Link
              href='/products'
              className='inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700'
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
