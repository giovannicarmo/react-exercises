import React from 'react';
import Member from './Member';

export default props => (
  <div>
    <Member name="Raphael" lastName={props.lastName}></Member>
    <Member name="Daniela" lastName={props.lastName}></Member>
    <Member name="Pedro" lastName={props.lastName}></Member>
  </div>
);
