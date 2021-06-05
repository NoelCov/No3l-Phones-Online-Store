import "./phone-container.styles.scss";

import React from "react";

import { auth, firestore } from "../../firebase/firebase.utils";

export const PhoneContainer = ({ image, phoneTitle }) => {
  
  const updateDocument = (userDocumentRef, counter) => {
    return userDocumentRef
      .update({
        [`cart.${phoneTitle}`]: {
          quantity: counter,
          image: image,
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
        <span onClick={handleClick} className="content-item">
          Buy this phone
        </span>
        <span className="content-item">View More</span>
      </div>
    </div>
  );
};
