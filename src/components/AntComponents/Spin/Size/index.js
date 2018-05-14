import React from 'react'
import './style.css'
import { Spin } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </div>,
    mountNode,
  )
}
