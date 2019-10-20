import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './components/FirstComponent';
import { CompA as A, CompB as B } from './components/XComponents';
import MultiElements from './components/MultiElements';
import SilvaFamily from './components/SilvaFamily';
import Family from './components/Family';
import Member from './components/Member';
import ComponentWithFunction from './components/ComponentWhitFunction'

const element = document.getElementById('root');
const rendered = (
  <div>
    <FirstComponent value="It works!"></FirstComponent>
    <A value="Hi Comp B!"></A>
    <B value="Hou're U, Comp A?"></B>
    <MultiElements></MultiElements>
    <SilvaFamily lastName="Silva"></SilvaFamily>
    <Family>
      <Member name="Andre" lastName="Pereira"></Member>
      <Member name="Mariana" lastName="Pereira"></Member>
    </Family>
    <ComponentWithFunction></ComponentWithFunction>
  </div>
);
ReactDOM.render(rendered, element);
