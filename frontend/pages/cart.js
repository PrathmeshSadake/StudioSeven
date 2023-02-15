import { useState } from "react";
import Link from "next/link";
import { QuestionMarkCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import getStripe from "../lib/getStripe";
import { useStateContext } from "../lib/context";

const policies = [
  {
    name: "Free returns",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
  },
  {
    name: "Same day delivery",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "We offer a delivery service that has never been done before. Checkout today and receive your products within hours.",
  },
  {
    name: "All year discount",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: "For the planet",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Cart() {
  const [open, setOpen] = useState(true);
  const { qty, increaseQty, decreaseQty, onAdd, cartItems } = useStateContext();

  const handleCheckout = async (e) => {
    e.preventDefault();
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    console.log(data);
    const { error } = await stripe.redirectToCheckout({
      sessionId: data.id,
    });
  };

  return (
    <div>
      {cartItems < 1 ? (
        <div className='pb-8 sm:pb-40 lg:pb-48 text-center'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static grid grid-cols-1'>
            <div className='pt-32 pr-12'>
              <h1 className='text-4xl font font-semibold tracking-tight text-gray-900 sm:text-6xl'>
                Your Shopping Cart is Empty
              </h1>
              <p className='mt-4 text-xl text-gray-500'>
                Looks Like you haven't made your choice yet
              </p>
              <Link
                href='/products'
                className='mt-4 inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700'
              >
                Check what we have got for you
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <section className='max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Shopping Cart
          </h1>

          <form className='mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16'>
            <section aria-labelledby='cart-heading' className='lg:col-span-7'>
              <h2 id='cart-heading' className='sr-only'>
                Items in your shopping cart
              </h2>

              <ul
                role='list'
                className='border-t border-b border-gray-200 divide-y divide-gray-200'
              >
                {cartItems.map((item) => (
                  <li key={item.slug} className='flex py-6 sm:py-10'>
                    <div className='flex-shrink-0'>
                      <img
                        src={item.image.data.attributes.formats.medium.url}
                        alt={item.title}
                        className='w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48'
                      />
                    </div>

                    <div className='ml-4 flex-1 flex flex-col justify-between sm:ml-6'>
                      <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                        <div>
                          <div className='flex justify-between'>
                            <h3 className='text-sm'>{item.title}</h3>
                          </div>

                          <p className='mt-1 text-sm font-medium text-gray-900'>
                            {item.price}
                          </p>
                        </div>

                        <div className='mt-4 sm:mt-0 sm:pr-9'>
                          <label
                            // htmlFor={`quantity-${productIdx}`}
                            className='sr-only'
                          >
                            Quantity, {item.quantity}
                          </label>
                          {/* <select
                          id={`quantity-${productIdx}`}
                          name={`quantity-${productIdx}`}
                          className='max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select> */}

                          <div className='absolute top-0 right-0'>
                            <button
                              type='button'
                              className='-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500'
                            >
                              <span className='sr-only'>Remove</span>
                              <XMarkIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* <p className='mt-4 flex text-sm text-gray-700 space-x-2'>
                      {product.inStock ? (
                        <CheckIcon
                          className='flex-shrink-0 h-5 w-5 text-green-500'
                          aria-hidden='true'
                        />
                      ) : (
                        <ClockIcon
                          className='flex-shrink-0 h-5 w-5 text-gray-300'
                          aria-hidden='true'
                        />
                      )}

                      <span>
                        {product.inStock
                          ? "In stock"
                          : `Ships in ${product.leadTime}`}
                      </span>
                    </p> */}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <button
              onClick={handleCheckout}
              className='w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'
            >
              Checkout
            </button>

            {/* Order summary */}
            <section
              aria-labelledby='summary-heading'
              className='mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5'
            >
              <h2
                id='summary-heading'
                className='text-lg font-medium text-gray-900'
              >
                Order summary
              </h2>

              <dl className='mt-6 space-y-4'>
                <div className='flex items-center justify-between'>
                  <dt className='text-sm text-gray-600'>Subtotal</dt>
                  <dd className='text-sm font-medium text-gray-900'>$99.00</dd>
                </div>
                <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                  <dt className='flex items-center text-sm text-gray-600'>
                    <span>Shipping estimate</span>
                    <a
                      href='#'
                      className='ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>
                        Learn more about how shipping is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        className='h-5 w-5'
                        aria-hidden='true'
                      />
                    </a>
                  </dt>
                  <dd className='text-sm font-medium text-gray-900'>$5.00</dd>
                </div>
                <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                  <dt className='flex text-sm text-gray-600'>
                    <span>Tax estimate</span>
                    <a
                      href='#'
                      className='ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>
                        Learn more about how tax is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        className='h-5 w-5'
                        aria-hidden='true'
                      />
                    </a>
                  </dt>
                  <dd className='text-sm font-medium text-gray-900'>$8.32</dd>
                </div>
                <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                  <dt className='text-base font-medium text-gray-900'>
                    Order total
                  </dt>
                  <dd className='text-base font-medium text-gray-900'>
                    $112.32
                  </dd>
                </div>
              </dl>

              <div className='mt-6'>
                <button
                  onClick={handleCheckout}
                  className='w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'
                >
                  Checkout
                </button>
              </div>
            </section>
          </form>
        </section>
      )}
      <section
        aria-labelledby='policies-heading'
        className='bg-gray-50 border-t border-gray-200'
      >
        <h2 id='policies-heading' className='sr-only'>
          Our policies
        </h2>

        <div className='max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0'>
            {policies.map((policy) => (
              <div
                key={policy.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
              >
                <div className='md:flex-shrink-0'>
                  <div className='flow-root'>
                    <img
                      className='-my-1 h-24 w-auto mx-auto'
                      src={policy.imageUrl}
                      alt=''
                    />
                  </div>
                </div>
                <div className='mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0'>
                  <h3 className='text-sm font-semibold tracking-wide uppercase text-gray-900'>
                    {policy.name}
                  </h3>
                  <p className='mt-3 text-sm text-gray-500'>
                    {policy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
