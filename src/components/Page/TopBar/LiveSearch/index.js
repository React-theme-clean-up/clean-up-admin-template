import React from 'react'
import { Input, Icon } from 'antd';

class LiveSearch extends React.Component {

  render() {
    return (
      <div className="d-inline-block mr-4">
        <Input
          className="topbar__liveSearch"
          placeholder="Type to search..."
          prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
          style={{ width: 200 }}
        />
      </div>
    )
  }
}

export default LiveSearch
