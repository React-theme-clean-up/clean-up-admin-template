import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import qs from 'querystring'
import { setLayoutState } from 'ducks/app'
import { merge } from 'lodash'

const mapStateToProps = (state, props) => ({
  layoutState: state.app.layoutState,
})

const updateSettings = ({ layoutState }) => {
  // console.log(layoutState)
  // if (isMenuLeft) {
  //   // $FlowFixMe
  //   document.body.classList.add(className)
  // } else {
  //   // $FlowFixMe
  //   document.body.classList.remove(className)
  // }
}

@connect(mapStateToProps)
@withRouter
class LayoutState extends React.PureComponent {
  bootstrapLayoutSettings() {
    const { dispatch } = this.props
    const urlParams = qs.parse((this.props.location.search).replace('?',''))
    const storageParams = JSON.parse(window.localStorage.getItem('app.layoutState'))
    const mergedParams = merge({}, storageParams, urlParams)
    const booleanMergedParams = JSON.parse(
      JSON.stringify(mergedParams),
      (key, value) => (value === 'true' ? true : value === 'false' ? false : value),
    )
    dispatch(setLayoutState({ ...booleanMergedParams }))
  }

  componentWillReceiveProps(newProps) {
    updateSettings(newProps)
  }

  componentDidMount() {
    this.bootstrapLayoutSettings()
  }

  render() {
    return null
  }
}

export default LayoutState
