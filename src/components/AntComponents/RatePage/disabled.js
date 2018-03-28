import React from 'react'
import './style/style.css'
import { Rate } from 'antd';




export default function(ReactDOM, mountNode) {
  
ReactDOM.render(<Rate disabled defaultValue={2} />, mountNode);

}
