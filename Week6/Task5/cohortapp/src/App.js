import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>Cohort List</h1>

      <CohortDetails
        name="Meet Govindwar"
        batch="July 2025"
        technology="ReactJS"
        status="ongoing"
      />

      <CohortDetails
        name="Gayatri Gosavi"
        batch="May 2025"
        technology="NodeJS"
        status="completed"
      />
    </div>
  );
}

export default App;
