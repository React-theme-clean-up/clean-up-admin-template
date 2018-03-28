import React from 'react'
import './style/style.css'
import { Progress } from 'antd';




export default function(ReactDOM, mountNode) {
  
ReactDOM.render(
  <div>
    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </div>
, mountNode);

}
