import React from 'react'
import './style/style.css'
import { Badge } from 'antd';




export default function(ReactDOM, mountNode) {
  
ReactDOM.render(
  <div>
    <Badge count={5}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={0} showZero>
      <a href="#" className="head-example" />
    </Badge>
  </div>
, mountNode);

}
