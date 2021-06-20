import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import "./assets/SubscriptionPlan.css";
import { loadStripe } from "@stripe/stripe-js";

function SubscriptionPlan({ product, isActive }) {
  console.log(product);
  const user = useSelector(selectUser);
  const { name, description, prices } = product;
  // const loadCheckout = async (priceId) => {
  //   const docRef = await db
  //     .collection("customers")
  //     .doc(user.uid)
  //     .collection("checkout_sessions")
  //     .add({
  //       price: priceId,
  //       success_url: window.location.origin,
  //       cancel_url: window.location.origin,
  //     });
  //   docRef.onSnapshot(async (snap) => {
  //     const { error, sessionId } = snap.data();
  //     if (error) {
  //       alert(error.message);
  //     }
  //     if (sessionId) {
  //       const stripe = await loadStripe(
  //         "sk_test_51IK2iVARwulHtK3C7BjtdUJAUtn3TADsefifp1IrICJfQpjrhbkAtCxknlRD6qyClHi6Zr38kIWwCPMvuJXEofLu00uSobNLGa"
  //       );
  //       stripe.redirectToCheckout({ sessionId });
  //     }
  //   });
  // };

  return (
    <div className="subcriptionPlan">
      <div className="subcriptionPlan_left">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{prices?.priceId}</p>
      </div>

      <button
        className={`subscriptionPlan--${
          isActive ? "active" : "notActive"
        } subscriptionPlanDiv`}
        // onClick={() => loadCheckout(prices?.priceId)}
      >
        {isActive ? "Current package" : "Subscribe"}
      </button>
    </div>
  );
}

export default SubscriptionPlan;
