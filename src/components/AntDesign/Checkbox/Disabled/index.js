import React from 'react'
import './style.css'
import { Checkbox } from 'antd';




export default function(ReactDOM, mountNode) {
  ReactDOM.render(
  <div>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </div>
  , mountNode);

}
