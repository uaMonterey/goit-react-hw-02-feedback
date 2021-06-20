import React from 'react';

const Statistics = ({
  stats: { good, neutral, bad },
  total,
  positiveFeedback,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedback}</p>
    </div>
  );
};

export default Statistics;
