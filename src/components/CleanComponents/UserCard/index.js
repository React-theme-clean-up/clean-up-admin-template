import React from 'react'
import { Radio } from 'antd'
import './style.scss'
import { user } from './data.json'
import Avatar from 'components/CleanComponents/Avatar'

class UserCard extends React.Component {
  state = {
    type: '',
  }

  getParams = () => {
    let params = this.props

    let { type } = this.state

    if (params.type !== undefined) {
      type = params.type
    }

    this.setState({
      type: type,
    })
  }

  componentWillMount() {
    this.getParams()
  }

  render() {
    let { type } = this.state

    return (
      <div className={`userCard px-3 py-5 ${type.length > 0 ? 'userCard--typed bg-' + type : ''}`}>
        <button className="userCard__plusBtn">Add</button>
        <Avatar
          src={user.avatar}
          border="true"
          borderColor={`${type.length > 0 ? 'white' : ''}`}
          size="90"
        />
        <div className="my-3 text-center">
          <div className="userCard__userName font-size-18">{user.name}</div>
          <div className="userCard__post">{user.post}</div>
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
