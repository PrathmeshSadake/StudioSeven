import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import { createClient, Provider } from "urql";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Toaster } from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StateContext } from "../lib/context";

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_API,
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Toaster />
          <style jsx global>{`
            html {
              font-family: ${poppins.style.fontFamily};
            }
          `}</style>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </StateContext>
    </UserProvider>
  );
}
