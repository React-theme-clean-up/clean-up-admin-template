import React from 'react'
import './AccountInformation.css'
import { user } from './data.json'

class AccountInformation extends React.Component {
  render() {
    return (
      <div className="cat__core__widget cat__core__widget__2">
        <div className="cat__core__widget__2__head"
          style={{
            backgroundImage: "url(" + user.cover + ")"
          }}
        >
          <h2 className="text-white">
            <strong>{user.mind}</strong>
          </h2>
        </div>
        <div className="cat__core__widget__2__content">
          <div className="cat__core__widget__2__left">
            <a className="cat__core__avatar cat__core__avatar--90 cat__core__avatar--border-white" href="javascript:void(0);">
              <img src={user.avatar} alt="User" />
            </a>
            <br />
            <strong>{user.name}</strong>
            <br />
            <span className="text-muted">{user.link}</span>
          </div>
          <div className="cat__core__widget__2__right">
            <p>{user.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default AccountInformation
