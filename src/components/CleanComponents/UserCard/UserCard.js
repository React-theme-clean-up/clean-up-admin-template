import React from 'react'
import { Radio } from 'antd';
import './UserCard.css'
import { user } from './data.json'

class UserCard extends React.Component {
  render() {
    return (
      <div className="cat__core__widget cat__core__widget__1 cat__core__widget--border px-3 py-5">
        <button className="cat__core__widget__1__plus">Add</button>
        <a className="cat__core__avatar cat__core__avatar--90 cat__core__avatar--border d-block mx-auto" href="javascript:void(0);">
          <img src={user.avatar} alt="User" />
        </a>
        <div className="my-3 text-center">
          <div className="font-size-18">{user.name}</div>
          <div className="text-muted">{user.post}</div>
        </div>
        <div className="text-center">
          <div className="btn-group text-center">
            <Radio.Group size="small">
              <Radio.Button value="large">Add</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    )
  }
}
export default UserCard
