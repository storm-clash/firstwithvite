//onChange = event handler used primarily with form elements
//           ex. <input>, <textarea>, <select>, <radio>
//           Triggers a function every time the value of the input changes

import React, { useState } from "react";

function OnChange() {
  const [name, setName] = useState("");
  const [payment, setPayment] = useState("Visa");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Gifcard">Gifcard</option>
        </select>
        <p>Payments: {payment}</p>
      </div>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        ></input>
        Pick Up
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        ></input>
        Delivery
      </label>

      <p>Shipping: {shipping}</p>
    </>
  );
}

export default OnChange;
