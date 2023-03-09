import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useQuery } from "urql";
import toast from "react-hot-toast";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import ProductsGrid from "../../components/ProductsGrid";
import { useStateContext } from "../../lib/context";
import LoadingScreen from "../../components/LoadingScreen";

export default function Product() {
  const router = useRouter();
  const { qty, increaseQty, decreaseQty, onAdd } = useStateContext();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: router.query.slug },
  });

  const { data, fetching, error } = result;
  // console.log(data.products.data[0]);

  if (fetching) return <LoadingScreen />;
  if (error)
    return <p className='text-xl font-semibold'>Oh no... {error.message}</p>;

  // Create a Toast
  const notify = (title) =>
    toast.success(`${title} added to your cart`, {
      duration: 1500,
    });

  return (
    <>
      <Head>
        <title>{`Product | ${data.products.data[0].attributes.title}`}</title>
      </Head>
      <div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 '>
        <div className='flex justify-center items-center lg:items-start lg:flex-row flex-col gap-8'>
          <div className='lg:hidden w-full sm:w-96 md:w-8/12 flex flex-col sm:gap-6 gap-4'>
            <p className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600'>
              <Link href='/products'>Product</Link> /{" "}
              {data.products.data[0].attributes.title}
            </p>
            <h2 className='font-medium lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-2'>
              {data.products.data[0].attributes.title}
            </h2>
            <p className='font-normal text-base leading-6 text-gray-600 mt-2'>
              {data.products.data[0].attributes.description}
            </p>
            <div className='w-full bg-gray-100 flex justify-center items-center'>
              <img
                src={
                  data.products.data[0].attributes.image.data.attributes.formats
                    .large.url
                }
                alt={data.products.data[0].attributes.title}
              />
            </div>
          </div>
          {/* <!-- Description Div --> */}
          <div className='w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center'>
            <div className='hidden lg:flex flex-col'>
              <p className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600'>
                <Link href='/products'>Product</Link> /{" "}
                {data.products.data[0].attributes.title}
              </p>
              <h2 className='font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4'>
                {data.products.data[0].attributes.title}
              </h2>
              <p className='font-normal text-base leading-6 text-gray-600 mt-7'>
                {data.products.data[0].attributes.description}
              </p>
            </div>

            <p className=' font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 '>
              {data.products.data[0].attributes.price} INR
            </p>

            <div className='lg:mt-11 mt-10'>
              <div className='flex flex-row justify-between'>
                <p className=' font-medium text-base leading-4 text-gray-600'>
                  Select quantity
                </p>
                <div className='flex'>
                  <span
                    onClick={decreaseQty}
                    className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1'
                  >
                    -
                  </span>
                  <p className='border border-gray-300 h-full text-center w-14'>
                    {qty}
                  </p>
                  <span
                    onClick={increaseQty}
                    className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 '
                  >
                    +
                  </span>
                </div>
              </div>
              <div>
                <div className='border-t border-b py-4 mt-7 border-gray-200'>
                  <div
                    onClick={() => setShow(!show)}
                    className='flex justify-between items-center cursor-pointer'
                  >
                    <p className='text-base leading-4 text-gray-800'>
                      Shipping and returns
                    </p>
                    <button
                      className='
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								'
                      aria-label='show or hide'
                    >
                      <svg
                        className={
                          "transform " + (show ? "rotate-180" : "rotate-0")
                        }
                        width='10'
                        height='6'
                        viewBox='0 0 10 6'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9 1L5 5L1 1'
                          stroke='#4B5563'
                          strokeWidth='1.25'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={
                      "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                      (show ? "block" : "hidden")
                    }
                    id='sect'
                  >
                    You will be responsible for paying for your own shipping
                    costs for returning your item. Shipping costs are
                    nonrefundable
                  </div>
                </div>
              </div>
              <div>
                <div className='border-b py-4 border-gray-200'>
                  <div
                    onClick={() => setShow2(!show2)}
                    className='flex justify-between items-center cursor-pointer'
                  >
                    <p className='text-base leading-4 text-gray-800'>
                      Contact us
                    </p>
                    <button
                      className='
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								'
                      aria-label='show or hide'
                    >
                      <svg
                        className={
                          "transform " + (show2 ? "rotate-180" : "rotate-0")
                        }
                        width='10'
                        height='6'
                        viewBox='0 0 10 6'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9 1L5 5L1 1'
                          stroke='#4B5563'
                          strokeWidth='1.25'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={
                      "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                      (show2 ? "block" : "hidden")
                    }
                    id='sect'
                  >
                    If you have any questions on how to return your item to us,
                    contact us.
                  </div>
                </div>
              </div>
            </div>
            {data && (
              <button
                onClick={() => {
                  onAdd(data.products.data[0].attributes, qty);
                  notify(data.products.data[0].attributes.title);
                }}
                className='focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6'
              >
                Add to shopping bag
              </button>
            )}
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}

          <div className='hidden lg:flex w-full lg:w-6/12 lg:flex-row lg:gap-8'>
            <div className=' w-full bg-gray-100 flex justify-center items-center'>
              <img
                src={
                  data.products.data[0].attributes.image.data.attributes.formats
                    .large.url
                }
                alt={data.products.data[0].attributes.title}
              />
            </div>
          </div>
        </div>
        <div className='mt-24'>
          <h2 className='font-semibold text-2xl lg:leading-9 leading-7 text-gray-800 mt-4'>
            BEST OF STUDIO SEVEN EXCLUSIVE
          </h2>
          <ProductsGrid productNotToShow={router.query.slug} />
        </div>
      </div>
    </>
  );
}
