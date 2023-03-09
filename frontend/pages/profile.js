import { useRouter } from "next/router";
// Specify Stripe secret api key here
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import formatMoney from "../lib/formatMoney";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    // access the user session
    const session = getSession(ctx.req, ctx.res);
    const stripeId = (await session)?.user[
      `${process.env.BASE_URL}/stripe_customer_id`
    ];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();
  console.log(orders);

  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
          {orders.map((order) => (
            <div key={order.id}>
              <div>
                <h1>Order Number: {order.id}</h1>
                <h2>{formatMoney(order.amount)}</h2>
              </div>
              <div>
                <h1>Receipt Email {order.receipt_email}</h1>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => route.push("/api/auth/logout")}>Log out</button>
      </div>
    )
  );
}
