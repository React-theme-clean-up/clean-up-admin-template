import React from 'react'
import './style.css'
import { Spin } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div className="example">
      <Spin />
    </div>,
    mountNode,
  )
}
