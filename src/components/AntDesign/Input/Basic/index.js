import React from 'react'
import './style.css'
import { Input } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(<Input placeholder="Basic usage" />, mountNode)
}
