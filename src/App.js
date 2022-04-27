import React, {Component} from 'react';
import './App.css';
import Components from './Component/helloWorld';
import Kathir from './Component/Hello';
import Popup from './Component/pop';
import Stricky from './Component/strickybutton';

class Akk extends Component
{
  render()
  {
  return (
    <div ClassName="App">
      <div id="ice">
      <Kathir/>
      <Components/>
      <Popup/>
      <Stricky/>
      </div>
    </div>
  );
}
}
export default Akk;