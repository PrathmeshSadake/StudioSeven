import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

function Checkout({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>NAME</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following credit card for testing purpose*
        <div className="card-info">
          <div>Card Number: 4242 4242 4242 4242</div>
          <div>Expiry Date: 01/25</div>
          <div>CVV: 123</div>
        </div>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(Checkout);
