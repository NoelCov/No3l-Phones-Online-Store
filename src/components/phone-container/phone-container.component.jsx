import "./phone-container.styles.scss";

import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const PhoneContainer = ({ phone, addItem }) => {
  const { imageUrl, phoneTitle, price } = phone;

  return (
    <div className="phone-container">
      <div
        className="phone-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <span className="phone-title">{phoneTitle}</span>
      <div className="content">
        <span onClick={() => addItem(phone)} className="content-item">
          Buy this phone
        </span>
        <span className="content-item">{price.toFixed(2)}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (phone) => dispatch(addItem(phone)),
});

export default connect(null, mapDispatchToProps)(PhoneContainer);
