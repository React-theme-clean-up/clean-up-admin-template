import React from 'react'
import './style.css'
import { Badge, Icon } from 'antd'

export default function(ReactDOM, mountNode) {
  ReactDOM.render(
    <div>
      <Badge dot>
        <Icon type="notification" />
      </Badge>
      <Badge count={0} dot>
        <Icon type="notification" />
      </Badge>
      <Badge dot>
        <a href="#">Link something</a>
      </Badge>
    </div>,
    mountNode,
  )
}
