import React from 'react'
import './style.css'
import { Progress } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(<Progress type="dashboard" percent={75} />, mountNode)
}
