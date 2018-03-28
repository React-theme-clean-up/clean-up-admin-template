import React from 'react'
import './style/style.css'
import { Switch } from 'antd';




export default function(ReactDOM, mountNode) {
  
ReactDOM.render(
  <div>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </div>
, mountNode);

}