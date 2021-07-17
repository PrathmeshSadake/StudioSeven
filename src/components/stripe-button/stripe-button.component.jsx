import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JE625SI8yYgzwHV2ybQpHFIbR5Ffa8xunWVD2MXT1TzcMwJvuN5DNLOb5HZSO38H0efes5TmYJfCHywTzO2ypNf00iQvjem6E";

  const ontoken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Studio Seven"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now "
      token={ontoken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
