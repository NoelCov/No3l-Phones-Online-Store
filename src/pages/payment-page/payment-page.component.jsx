import "./payment-page.styles.scss";

import React, { Component } from "react";

import { auth, firestore } from "../../firebase/firebase.utils";

import { PaymentItemsContainer } from "../../components/payment-items-container/payment-items-container.component";
import { PaymentTotal } from "../../components/payment-total/payment-total.component";

export default class PaymentPage extends Component {
  constructor() {
    super();

    this.state = {
      cart: {},
      docRef: firestore.doc(`users/${auth.currentUser.uid}`),
      total: 0,
    };
  }

  componentDidMount() {
    this.state.docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({
            cart: doc.data().cart,
          });

          const keys = Object.keys(this.state.cart);
          let total = this.getTotal(keys);
          this.setState({ total: total });

        } else {
          console.log("No such document");
        }
      })
      .catch((error) => {
        console.log("Error getting document", error);
      });
  }

  emptyCart = () => {
    this.state.docRef
      .update({
        cart: {},
      })
      .then(this.setState({ cart: {} }));
  };

  getTotal = (keys) => {
    let total = 0;
    for (let i = 0; i < keys.length; i++) {
      let item = this.state.cart[keys[i]];
      let itemTotal = item.quantity * item.price;

      total += itemTotal;
    }
    return total;
  }

  render() {
    const { cart, total } = this.state;
    
    return (
      <div className="payment-page">
        <PaymentItemsContainer cart={cart} onClick={this.emptyCart} />
        <PaymentTotal total={total}/>
      </div>
    );
  }
}
