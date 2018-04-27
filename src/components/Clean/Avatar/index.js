import React from 'react'
import './style.css'

class Avatar extends React.Component {
  state = {
    size: undefined,
    border: 'false',
    borderColor: '#d2d9e5',
    src: undefined,
    className: 'avatar',
  }

  getParams = () => {
    let params = this.props

    let { className } = this.state

    if (params.size !== undefined) {
      className = className + ' avatar--' + params.size
    }

    if (params.border === 'true') {
      className = className + ' avatar--border'
    }

    if (params.borderColor !== undefined) {
      this.setState({
        borderColor: params.borderColor,
      })
    }

    this.setState({
      className: className,
    })
  }

  componentWillMount() {
    this.getParams()
  }

  render() {
    const { className, borderColor } = this.state

    return (
      <a
        className={'d-block mx-auto ' + className}
        href={''}
        style={{
          borderColor: borderColor,
        }}
      >
        <img src={this.props.src} alt="User" />
      </a>
    )
  }
}

export default Avatar
