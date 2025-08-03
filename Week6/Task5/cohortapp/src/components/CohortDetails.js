// src/components/CohortDetails.js
import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = (props) => {
  return (
    <div className={styles.box}>
      <dl>
        <dt>Name:</dt>
        <dd>{props.name}</dd>

        <dt>Batch:</dt>
        <dd>{props.batch}</dd>

        <dt>Technology:</dt>
        <dd>{props.technology}</dd>
      </dl>
      <h3 style={{ color: props.status === 'ongoing' ? 'green' : 'blue' }}>
        {props.status}
      </h3>
    </div>
  );
};

export default CohortDetails;
