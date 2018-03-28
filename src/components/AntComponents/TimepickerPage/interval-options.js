import React from 'react'
import './style/style.css'
import { TimePicker } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(<TimePicker minuteStep={15} secondStep={10} />, mountNode)
}
