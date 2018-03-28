import React from 'react'
import './style/style.css'
import { Card } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <Card loading title="Card title" style={{ width: '34%' }}>
      Whatever content
    </Card>,
    mountNode,
  )
}
