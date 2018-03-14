// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setUpdatingContent } from 'ducks/app'
import { isEmpty } from 'lodash'
import Path from './Page_Path'

const mapStateToProps = (state, props) => ({
  isUpdatingContent: state.app.isUpdatingContent,
})

@connect(mapStateToProps)
class Content extends React.Component {
  static contextTypes = {
    getContentBuffer: PropTypes.func,
  }

  node: HTMLElement

  shouldComponentUpdate(nextProps: { isUpdatingContent: boolean }) {
    if (this.props.isUpdatingContent && !nextProps.isUpdatingContent) {
      return false
    }
    return true
  }

  componentDidUpdate() {
    const { isUpdatingContent, dispatch } = this.props
    if (isUpdatingContent) {
      dispatch(setUpdatingContent(false))
    }
  }

  render() {
    const { getContentBuffer } = this.context
    const { pathName, content } = getContentBuffer()
    return isEmpty(content)
      ? <div className="rfq__utility__loading-fullscreen" />
      : <div className="cat__content">
          <Path name={pathName} />
          {content}
        </div>
  }
}

export default Content
