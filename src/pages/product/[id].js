import AddToCart from "@/components/AddToCart";
import CustomersAlsoBought from "@/components/CustomersAlsoBought";
import formatPrice from "@/utils/priceFormat";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Stripe from "stripe";

const details = [
  {
    name: "Features",
    items: [
      "Multiple strap configurations",
      "Spacious interior with top zip",
      "Leather handle and tabs",
      "Interior dividers",
      "Stainless strap loops",
      "Double stitched construction",
      "Water-resistant",
    ],
  },
  {
    name: "Care",
    items: [
      "Spot clean as needed",
      "Hand wash with mild soap",
      "Machine wash interior dividers",
      "Treat handle and tabs with leather conditioner",
    ],
  },
  {
    name: "Shipping",
    items: [
      "Free shipping on orders over 2000",
      "International shipping available",
      "Expedited shipping options",
      "Signature required upon delivery",
    ],
  },
];

export default function ProductPage({ product, products }) {
  return (
    <div className='bg-white'>
      <div className='pt-6 pb-16 sm:pb-24'>
        <div className='mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-12'>
            <div className='lg:col-span-7 lg:pl-12 flex flex-col space-y-6'>
              <div className='flex justify-between'>
                <h1 className='text-xl font-medium text-gray-900'>
                  {product.name}
                </h1>
                <p className='text-xl font-medium text-gray-900'>
                  {formatPrice(product.price)}
                </p>
              </div>
              <p>{product.description}</p>
              <AddToCart product={{ ...product, price: product.price / 100 }} />

              <section aria-labelledby='details-heading' className='mt-8'>
                <h2 id='details-heading' className='sr-only'>
                  Additional details
                </h2>

                <div className='divide-y divide-gray-200 border-t'>
                  {details.map((detail) => (
                    <Disclosure as='div' key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className='group relative flex w-full items-center justify-between py-6 text-left'>
                              <span
                                className={`
                                  ${open ? "text-indigo-600" : "text-gray-900"}
                                  text-sm font-medium`}
                              >
                                {detail.name}
                              </span>
                              <span className='ml-6 flex items-center'>
                                {open ? (
                                  <MinusIcon
                                    className='block h-6 w-6 text-indigo-400 group-hover:text-indigo-500'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <PlusIcon
                                    className='block h-6 w-6 text-gray-400 group-hover:text-gray-500'
                                    aria-hidden='true'
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as='div'
                            className='prose prose-sm pb-6'
                          >
                            <ul role='list'>
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
            <div className='mt-8 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0'>
              <h2 className='sr-only'>Image</h2>
              <img
                src={product.image}
                alt={product.name}
                className='rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
      <CustomersAlsoBought products={products} />
    </div>
  );
}

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });
  const products = await stripe.products.list();
  const productsWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id });
      return {
        id: product.id,
        name: product.name,
        price: prices.data[0].unit_amount,
        currency: prices.data[0].currency,
        description: product.description,
        image: product.images[0],
      };
    })
  );
  return productsWithPrices;
};

export async function getServerSideProps(context) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });
  const products = await getProducts();

  const product = await stripe.products.retrieve(context.query.id);
  const prices = await stripe.prices.list({ product: product.id });
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        price: prices.data[0].unit_amount,
        currency: prices.data[0].currency,
        description: product.description,
        image: product.images[0],
      },
      products: products.sort(() => 0.5 - Math.random()).slice(0, 4),
    },
  };
}
