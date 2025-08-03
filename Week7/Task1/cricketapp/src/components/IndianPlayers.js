// src/components/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const team = ['Rohit', 'Virat', 'Hardik', 'Jadeja', 'Bumrah', 'Gill'];

  // Destructuring array
  const [p1, p2, p3, p4, p5, p6] = team;
  const oddTeam = [p1, p3, p5];
  const evenTeam = [p2, p4, p6];

  const T20Players = ['Rinku', 'Samson', 'Pant'];
  const RanjiPlayers = ['Rahane', 'Pujara', 'Shaw'];

  // Merging arrays using ES6 spread operator
  const allPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>

      <h2>Merged T20 & Ranji Trophy Players</h2>
      <ul>
        {allPlayers.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
