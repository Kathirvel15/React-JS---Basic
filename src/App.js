import React, {Component} from 'react';
import './App.css';
import Components from './Component/helloWorld';
import Kathir from './Component/Hello';


class Akk extends Component
{
  render()
  {
  return (
    <div ClassName="App">
      <div id="ice">
      <Components/>
      <Kathir/>
      </div>
    </div>
  );
}
}
export default Akk;