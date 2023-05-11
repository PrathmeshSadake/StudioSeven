import AddToCart from "@/components/AddToCart";
import formatPrice from "@/utils/priceFormat";
import Stripe from "stripe";

export default function ProductPage({ product }) {
  console.log(product);

  return (
    <div className='bg-white'>
      <div className='pt-6 pb-16 sm:pb-24'>
        <div className='mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-12'>
            <div className='lg:col-span-7'>
              <div className='flex justify-between'>
                <h1 className='text-xl font-medium text-gray-900'>
                  {product.name}
                </h1>
                <p className='text-xl font-medium text-gray-900'>
                  {formatPrice(product.price)}
                </p>
              </div>
              <p>{product.description}</p>
              <AddToCart
                product={{ ...product, price: formatPrice(product.price) }}
              />
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
    </div>
  );
}

export async function getServerSideProps(context) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });
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
    },
  };
}
