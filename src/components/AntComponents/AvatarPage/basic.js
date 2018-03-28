import React from 'react'
import './style/style.css'
import { Avatar } from 'antd';




export default function(ReactDOM, mountNode) {
  
ReactDOM.render(
  <div>
    <div>
      <Avatar size="large" icon="user" />
      <Avatar icon="user" />
      <Avatar size="small" icon="user" />
    </div>
    <div>
      <Avatar shape="square" size="large" icon="user" />
      <Avatar shape="square" icon="user" />
      <Avatar shape="square" size="small" icon="user" />
    </div>
  </div>
, mountNode);

}
