import React from 'react'
import './style/style.css'
import { Rate } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Rate defaultValue={3} /> allowClear: true
      <br />
      <Rate allowClear={false} defaultValue={3} /> allowClear: false
    </div>,
    mountNode,
  )
}
