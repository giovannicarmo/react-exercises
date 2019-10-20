import React from 'react';

export default props => {
  const approved = ['Paula', 'Roberta', 'Gustavo', 'Julia'];
  const generateItens = itens => {
    return itens.map(item => <li>{item}</li>);
  };
};

return <ul>{generateItens(approved)}</ul>;
