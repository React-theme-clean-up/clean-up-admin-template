import React from 'react'
import './style/style.css'
import { Alert } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(<Alert message="Success Text" type="success" />, mountNode)
}
