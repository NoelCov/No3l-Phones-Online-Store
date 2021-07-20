import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  PhoneContainerContainer,
  PhoneImage,
  PhoneTitle,
  ContentContainer,
  ContentItem,
} from "./phone-container.styles";

const PhoneContainer = ({ phone, addItem }) => {
  const { imageUrl, phoneTitle, price } = phone;

  return (
    <PhoneContainerContainer>
      <PhoneImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <PhoneTitle>{phoneTitle}</PhoneTitle>
      <ContentContainer>
        <ContentItem onClick={() => addItem(phone)}>Buy this phone</ContentItem>
        <ContentItem>{price.toFixed(2)}</ContentItem>
      </ContentContainer>
    </PhoneContainerContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (phone) => dispatch(addItem(phone)),
});

export default connect(null, mapDispatchToProps)(PhoneContainer);
