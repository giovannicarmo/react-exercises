import React from 'react';

const approved = ['Paula', 'Roberta', 'Gustavo', 'Julia'];

export default props => {
  const generateItens = itens => {
    return itens.map(item => <li>{item}</li>);
  };
  return <ul>{generateItens(approved)}</ul>;
};
