import React from 'react'
import { Tabs, Radio } from 'antd'
import Avatar from 'components/CleanComponents/Avatar/Avatar'
import './Messaging.css'
import data from './data.json'

const TabPane = Tabs.TabPane

const chatTab = chat => {
  let tabName = chat.companionName
  let chatMessages = chat.chatMessages
  let lastMessage = chatMessages[chatMessages.length - 1].content
  let tabImg = chat.companionImg
  return (
    <div className="messaging__tab">
      <div className="messaging__tab-avatar">
        <Avatar src={tabImg} size="50" border="true" borderColor="#fff" />
      </div>
      <div className="messaging__tab-content">
        <small className="messaging__tab-time">8:34PM</small>
        <div className="messaging__tab-name">
          {tabName}
        </div>
        <div className="messaging__tab-text">
          {lastMessage}
        </div>
      </div>
    </div>
  )
}

// const Message = ({ chat, user }) =>
//   <div
//     className={`clearfix chat__item ${user === chat.username
//       ? 'chat__item--left'
//       : 'chat__item--right'}`}
//   >
//     <div className="chat__itemAvatar">
//       <Avatar src={chat.img} size="50" border="false" />
//     </div>
//     <div className="chat__itemContent">
//       <strong>
//         {chat.username}
//       </strong>
//       <p>
//         {chat.content}
//       </p>
//     </div>
//   </div>

class MessagingApp extends React.Component {
  state = {
    chatOwner: '',
    chatsData: [],
  }

  componentWillMount() {
    this.setState({
      chatOwner: data.chatOwner,
      chatsData: data.chats,
    })
  }

  render() {
    let { chatOwner, chatsData } = this.state
    return (
      <div className="card messaging">
        <div className="messaging__sidebar">
          <div className="messaging__tabs">
            <Tabs defaultActiveKey="0" tabPosition={'left'}>
              {chatsData.map((chat, index) => <TabPane tab={chatTab(chat)} key={index} />)}
            </Tabs>
          </div>
        </div>
        <div className="messaging__content">
          <div className="messaging__chat height-700" />
          <form className="form-group mt-4 mb-3">
            <textarea className="form-control adjustable-textarea" placeholder="Type message..." />
            <div className="mt-3">
              <button type="submit" className="btn btn-primary width-200">
                <i className="fa fa-send mr-2" />
                Send
              </button>
              <button className="btn btn-link">Attach File</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default MessagingApp
