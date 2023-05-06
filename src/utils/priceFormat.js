const formatPrice = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format(amount / 100);
};

export default formatPrice;
