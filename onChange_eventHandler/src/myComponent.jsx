// onChange = event handler used primarilywith form elementsex: <textarea>, <input>, <select>, <radio>. Triggersa function everytime the value of the input changes

import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Value: {name}</p>
      <input value={quantity} type="number" onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        cols="30"
        rows="10"
      ></textarea>
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value={""}>Select payment method</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
      </select>
      <p>Payment method: {payment}</p>
      <label>
        <input
          value="Pick Up"
          type="radio"
          onChange={handleShippingChange}
          checked={shipping === "Pick Up"}
        />
        Pick Up
      </label>{" "}
      <br />
      <label>
        <input
          value="Delivery"
          type="radio"
          onChange={handleShippingChange}
          checked={shipping === "Delivery"}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;
