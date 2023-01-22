import Link from "next/link";

export default function Hero() {
  return (
    <div className='pb-8 sm:pb-40 lg:pb-48'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static grid grid-cols-1 lg:grid-cols-2'>
        <div className='pt-16 pr-12'>
          <h1 className='text-4xl font font-semibold tracking-tight text-gray-900 sm:text-6xl'>
            All Season styles are finally here
          </h1>
          <p className='mt-4 text-xl text-gray-500'>
            This year, our new collection will shelter you from the harsh
            elements of a world that doesn't care if you live or die.
          </p>
          <Link
            href='/products'
            className='mt-4 inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700'
          >
            Shop Collection
          </Link>
        </div>

        <div className='w-full mt-8 md:mt-0'>
          {/* Decorative image grid */}
          <div className=''>
            <div className='grid grid-cols-3 gap-4'>
              <div className='flex-shrink-0 grid grid-cols-1'>
                <div className='w-full h-32 lg:h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
                  <img
                    src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                    alt=''
                    className='w-full h-full object-center object-cover'
                  />
                </div>
                <div className='w-full h-32 lg:h-64 rounded-lg overflow-hidden'>
                  <img
                    src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                    alt=''
                    className='w-full h-full object-center object-cover'
                  />
                </div>
              </div>
              <div className='mt-4 flex-shrink-0 grid grid-cols-1'>
                <div className='lg:mt-24 w-full h-32 lg:h-64 rounded-lg overflow-hidden'>
                  <img
                    src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                    alt=''
                    className='w-full h-full object-center object-cover'
                  />
                </div>
                <div className='w-full h-32 lg:h-64 rounded-lg overflow-hidden'>
                  <img
                    src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                    alt=''
                    className='w-full h-full object-center object-cover'
                  />
                </div>
              </div>
              <div className='flex-shrink-0 grid grid-cols-1'>
                <div className='w-full h-32 lg:h-64 rounded-lg overflow-hidden'>
                  <img
                    src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                    alt=''
                    className='w-full h-full object-center object-cover'
                  />
                </div>
                <div className='w-full h-32 lg:h-64 rounded-lg overflow-hidden'>
                  <img
                    src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                    alt=''
                    className='w-full h-full object-center object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
