import "./phone-container.styles.scss";

import React from "react";
import { Link } from "react-router-dom";

import { auth, firestore } from "../../firebase/firebase.utils";

export const PhoneContainer = ({ image, phoneTitle, price }) => {
  const updateDocument = (userDocumentRef, counter) => {
    return userDocumentRef
      .update({
        [`cart.${phoneTitle}`]: {
          quantity: counter,
          image: image,
          price: price,
        },
      })
      .then(() => {
        console.log("Document was succesfully updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    const userDocumentRef = firestore.doc(`users/${auth.currentUser.uid}`);
    userDocumentRef.get().then((doc) => {
      if (doc.exists) {
        let counter = null;
        const cartObj = doc.data().cart;
        cartObj[phoneTitle]
          ? (counter = cartObj[phoneTitle].quantity + 1)
          : (counter = 1);

        updateDocument(userDocumentRef, counter);
      } else {
        console.log("No such doc");
      }
    });
  };

  return (
    <div className="phone-container">
      <div
        className="phone-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <span className="phone-title">{phoneTitle}</span>
      <div className="content">
        {auth.currentUser !== null ? (
          <span onClick={handleClick} className="content-item">
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
