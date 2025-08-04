import React from "react";
import "./App.css";

function App() {
  // Step 3: Office object list
  const offices = [
    {
      id: 1,
      name: "Skyline Tower",
      rent: 45000,
      address: "MG Road, Pune",
      image: "https://via.placeholder.com/200?text=Skyline+Tower",
    },
    {
      id: 2,
      name: "Ocean View Office",
      rent: 75000,
      address: "Marine Drive, Mumbai",
      image: "https://via.placeholder.com/200?text=Ocean+View",
    },
    {
      id: 3,
      name: "Tech Park Hub",
      rent: 58000,
      address: "Hinjewadi, Pune",
      image: "https://via.placeholder.com/200?text=Tech+Park+Hub",
    },
  ];

  // Step 4: JSX rendering
  return (
    <div className="App">
      {/* Heading using JSX */}
      <h1>Office Space Rental App</h1>

      {/* Render each office */}
      {offices.map((office) => (
        <div key={office.id} style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
          <img src={office.image} alt={office.name} style={{ width: 200, height: 200 }} />
          <h2>{office.name}</h2>
          <p>Address: {office.address}</p>
          <p
            style={{
              color: office.rent < 60000 ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
