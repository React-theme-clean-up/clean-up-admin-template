// @flow
import React from 'react'
import { connect } from 'react-redux'

const updateClass = ({ isMenuLeft }) => {
  const widthValue = window.getComputedStyle(document.body, null).getPropertyValue('width')
  const width = parseInt(widthValue, 10)
  const className = width < 768 ? 'cat__menu-left--visible--mobile' : 'cat__menu-left--visible'
  if (isMenuLeft) {
    // $FlowFixMe
    document.body.classList.add(className)
  } else {
    // $FlowFixMe
    document.body.classList.remove(className)
  }
}

const mapStateToProps = (state, props) => ({
  isMenuLeft: state.app.isMenuLeft,
})

@connect(mapStateToProps)
class BodyClass extends React.PureComponent {
  // $FlowFixMe
  constructor(props) {
    super(props)
    updateClass(props)
  }

  componentDidUpdate() {
    updateClass(this.props)
  }

  render() {
    return null
  }
}

export default BodyClass
