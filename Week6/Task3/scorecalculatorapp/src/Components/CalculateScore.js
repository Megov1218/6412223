import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const name = "Meet Govindwar";
  const school = "DY Patil Institute";
  const total = 450;
  const goal = 5;

  const average = total / goal;

  return (
    <div className="score-box">
      <h2>Student Score Calculator</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Score:</strong> {total}</p>
      <p><strong>Number of Goals:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}</p>
    </div>
  );
}

export default CalculateScore;
