import React from 'react'
import './style/style.css'
import { Card } from 'antd';




export default function(ReactDOM, mountNode) {
  
ReactDOM.render(
  <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
, mountNode);

}
