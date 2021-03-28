import React from "react";
import { connect } from "react-redux",
import "./collection-item.scss";

import CustomButton from "../custom-button/custom-button";
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({ id, name, price, imageUrl, addItem }) =>(
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <div className="price">{price}</div>
      </div>
      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  );

  const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });

  export default connect(null ,mapDispatchToProps)(CollectionItem);
