import React from 'react'
import { Button } from 'antd'
import Avatar from '../../CleanComponents/Avatar/Avatar'
import LockscreenForm from './LockscreenForm.js'
import './Lockscreen.css'

class Lockscreen extends React.Component {
  state = {
    backgroundImage: 'url(resources/images/login/1.jpg)',
    fullSize: false,
  }

  generateBackground = () => {
    let { backgroundImage } = this.state

    let min = 1
    let max = 5
    let picNumber = Math.floor(Math.random() * (max - min + 1)) + min
    ;(backgroundImage =
      'url(resources/images/login/' + picNumber + '.jpg)'), this.setState({
      backgroundImage: backgroundImage,
    })
  }

  switchSize = () => {
    let { fullSize } = this.state

    fullSize = !fullSize

    console.log(fullSize)

    this.setState({
      fullSize: fullSize,
    })
  }

  render() {
    const { backgroundImage, fullSize } = this.state

    return (
      <div
        className={fullSize === false ? 'login' : 'login login--fullscreen'}
        style={{ backgroundImage: backgroundImage }}
      >
        <div className="login__header">
          <div className="row">
            <div className="col-lg-8">
              <div className="login__header__logo">
                <a href="javascript: void(0);">
                  <img
                    src="resources/images/login/logo-inverse.png"
                    alt="Clean UI Admin Template"
                  />
                </a>
                <Button className="ml-3" onClick={this.switchSize} size="small">
                  Switch Fullscreen / Windowed
                </Button>
                <Button className="ml-3" onClick={this.generateBackground} size="small">
                  Randomize Background Image
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="login__block">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__inner">
                <div className="login__block__form">
                  <form id="form-validation" name="form-validation" method="POST">
                    <div className="text-center mb-3">
                      <Avatar
                        src="resources/images/avatars/1.jpg"
                        border="true"
                        size="90"
                      />
                    </div>
                    <h2 style={{ color: '#514d6a' }} className="text-center">
                      <i className="icmn-lock" />
                      <strong>Artour Arteezy</strong>
                    </h2>
                    <br />
                    <LockscreenForm />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Lockscreen
