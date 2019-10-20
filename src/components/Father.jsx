import React from 'react';
import Son from './Son';

export default props => {
  const notifyExit = place => alert(`Liberado pra ${place}!`);

  return (
    <div>
      <Son notifyExit={notifyExit}></Son>
    </div>
  );
};
