import { signIn, getCsrfToken, getProviders } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <div className='flex h-screen w-full'>
      <div className='flex flex-1 flex-col justify-center items-center'>
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name} className='mx-6 md:mx-auto'>
              <button
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: `${window.location.origin}`,
                  })
                }
                class=' text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken: csrfToken,
    },
  };
}
