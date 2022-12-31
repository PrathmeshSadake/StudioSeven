import { useQuery } from "urql";
import Product from "../components/Product";
import { PRODUCT_QUERY } from "../lib/query";

export default function Home() {
  const [result, reexecuteQuery] = useQuery({
    query: PRODUCT_QUERY,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p className='text-xl font-semibold'>Loading...</p>;
  if (error)
    return <p className='text-xl font-semibold'>Oh no... {error.message}</p>;
  console.log(result);
  return (
    <div className='mx-auto max-w-7xl pt-20 pb-32 sm:pt-48 sm:pb-40'>
      <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {data.products.data.map(({ attributes }) => (
          <Product product={attributes} />
        ))}
      </div>
    </div>
  );
}
