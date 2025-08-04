import React from "react";

function GuestPage() {
  return (
    <div style={boxStyle}>
      <h2>Welcome, Guest!</h2>
      <p>Here are some available flights:</p>
      <ul>
        <li>🛫 Mumbai → Delhi | ₹5000</li>
        <li>🛫 Pune → Bangalore | ₹3500</li>
        <li>🛫 Chennai → Hyderabad | ₹2700</li>
      </ul>
      <p><i>Login to book your ticket.</i></p>
    </div>
  );
}

const boxStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  marginTop: "20px",
  borderRadius: "8px",
};

export default GuestPage;
