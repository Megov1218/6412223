// src/components/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Rohit', score: 85 },
    { name: 'Virat', score: 92 },
    { name: 'Dhoni', score: 76 },
    { name: 'Hardik', score: 65 },
    { name: 'Gill', score: 44 },
    { name: 'Jadeja', score: 95 },
    { name: 'Shami', score: 38 },
    { name: 'Bumrah', score: 72 },
    { name: 'Surya', score: 90 },
    { name: 'Ishan', score: 58 },
    { name: 'Axar', score: 63 }
  ];

  // ES6 arrow function to filter players with score < 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players Scored Below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
