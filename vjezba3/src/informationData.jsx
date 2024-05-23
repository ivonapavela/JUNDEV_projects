import React from "react";

export default function InformationData({ personalData, paymentData }) {
  return (
    <div className = "card">
      <h2>Personal Information</h2>
      <p>Email: {personalData.email}</p>
      <p>Address: {personalData.address}</p>
      <p>City: {personalData.city}</p>
      <p>Country: {personalData.country}</p>
      
      <h2>Payment Information</h2>
      <p>Card Number: {paymentData.cardNumber}</p>
      <p>Expire Date: {paymentData.expireMonth} / {paymentData.expireYear}</p>
      <p>Card Holder: {paymentData.cardHolder}</p>
      <p>CVV: {paymentData.cvv}</p>
    </div>
  );
}
