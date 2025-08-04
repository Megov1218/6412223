import React from "react";

function UserPage() {
  return (
    <div style={boxStyle}>
      <h2>Welcome, User!</h2>
      <p>Book your ticket from the available flights:</p>
      <ul>
        <li>
          🛫 Mumbai → Delhi | ₹5000 <button>Book</button>
        </li>
        <li>
          🛫 Pune → Bangalore | ₹3500 <button>Book</button>
        </li>
        <li>
          🛫 Chennai → Hyderabad | ₹2700 <button>Book</button>
        </li>
      </ul>
    </div>
  );
}

const boxStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  marginTop: "20px",
  borderRadius: "8px",
};

export default UserPage;
