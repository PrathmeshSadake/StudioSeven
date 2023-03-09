import { useQuery } from "urql";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import LoadingScreen from "../components/LoadingScreen";

import Product from "../components/Product";
import { PRODUCT_QUERY } from "../lib/query";

export default function Home() {
  const [result, reexecuteQuery] = useQuery({
    query: PRODUCT_QUERY,
  });

  const { data, fetching, error } = result;

  if (fetching) return <LoadingScreen />;
  if (error)
    return <p className='text-xl font-semibold'>Oh no... {error.message}</p>;

  return (
    <div className='mx-auto max-w-7xl px-2 pt-2 pb-32 sm:pt-48 sm:pb-40'>
      <Hero />
      <h1 className='px-2 text-2xl font sm:font-medium tracking-tight text-gray-900 sm:text-4xl'>
        BEST OF STUDIO SEVEN EXCLUSIVE
      </h1>
      <div className='px-2 my-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {data.products.data.map(({ attributes }) => (
          <Product product={attributes} />
        ))}
      </div>
      <CTA />
    </div>
  );
}
