import React from 'react'
import { Radio } from 'antd'
import './UserCard.css'
import { user } from './data.json'
import Avatar from 'components/CleanComponents/Avatar/Avatar'

class UserCard extends React.Component {
  render() {
    return (
      <div className="userCard px-3 py-5">
        <button className="userCard__plusBtn">Add</button>
        <Avatar src={user.avatar} border="true" size="90" />
        <div className="my-3 text-center">
          <div className="font-size-18">
            {user.name}
          </div>
          <div className="text-muted">
            {user.post}
          </div>
        </div>
        <div className="text-center">
          <div className="btn-group text-center">
            <Radio.Group size="small">
              <Radio.Button value="large">Add</Radio.Button>
              <Radio.Button value="default">Remove</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    )
  }
}

export default UserCard
