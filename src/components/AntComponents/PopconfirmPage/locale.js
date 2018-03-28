import React from 'react'
import './style/style.css'
import { Popconfirm } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
      <a href="#">Delete</a>
    </Popconfirm>,
    mountNode,
  )
}
