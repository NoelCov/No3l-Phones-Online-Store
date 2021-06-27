import "./phone-container.styles.scss";

import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const PhoneContainer = ({ image, phoneTitle, price, addItem }) => {
  return (
    <div className="phone-container">
      <div
        className="phone-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <span className="phone-title">{phoneTitle}</span>
      <div className="content">
        {auth.currentUser !== null ? (
          <span onClick={() => addItem([phoneTitle, price])} className="content-item">
            Buy this phone
          </span>
        ) : (
          <Link to="signin">
            <span className="content-item">Buy this phone</span>
          </Link>
        )}
        <span className="content-item">{price.toFixed(2)}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (phone) => dispatch(addItem(phone)),
});

export default connect(null, mapDispatchToProps)(PhoneContainer);
