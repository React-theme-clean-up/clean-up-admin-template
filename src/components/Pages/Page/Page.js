// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initAuth, setLoading, setUpdatingContent, resetHideLogin } from 'ducks/app'
import NotFound from 'components/Pages/NotFound'
import AppLayout from './Page_Layout'
import Dialog from './Page_Dialog'

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading,
})

type FunctionOnMounted = () => Promise<any>

@connect(mapStateToProps)
class Page extends React.Component {
  props: {
    roles: Array<string>,
    pathName: any,
    onMounted: ?FunctionOnMounted,
    isNotFound: boolean,
    children: any,
    isLoading: boolean,
    dispatch: Function,
  }

  static propTypes = {
    roles: PropTypes.array,
    pathName: PropTypes.any,
    isNotFound: PropTypes.bool,
    onMounted: PropTypes.func,
    children: PropTypes.any,
    // from connect
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func,
  }

  static contextTypes = {
    setContentBuffer: PropTypes.func,
  }

  static defaultProps = {
    pathName: null,
    isNotFound: false,
    onMounted: null,
    isLoading: false,
    dispatch: () => {},
  }

  isFirstContent = true
  _onMounted = null
  timeoutId = null
  isStartLoading = false
  source = null

  updateContent = () => {
    const { setContentBuffer } = this.context
    const { isNotFound, pathName, children, dispatch } = this.props
    setContentBuffer({ pathName, content: isNotFound ? <NotFound /> : children })
    dispatch(setUpdatingContent(true))
    if (this.isFirstContent) {
      this.isFirstContent = false
      setTimeout(() => window.scrollTo(0, 0))
    }
  }

  stopLoading = () => {
    if (this.isStartLoading) {
      this.isStartLoading = false
      const { dispatch } = this.props
      setTimeout(() => {
        dispatch(setLoading(false))
        dispatch(resetHideLogin())
      })
    }
  }

  componentDidMount() {
    const { onMounted, dispatch } = this.props
    let initLoggined = initAuth(dispatch)

    if (initLoggined) {
      this._onMounted = function() {
        return onMounted()
      }
    } else {
      this._onMounted = onMounted
    }

    if (this._onMounted) {
      dispatch(setLoading(true))
      this.isStartLoading = true
      let isResolve = false
      this.timeoutId = setTimeout(() => {
        this.timeoutId = null
        if (isResolve) {
          this.stopLoading()
        }
      }, 300) // show app loading 300ms
      if (this._onMounted) {
        isResolve = true
        if (!this.timeoutId) {
          this.stopLoading()
        }
      }
    } else {
      this.updateContent()
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    this.stopLoading()
  }

  componentDidUpdate() {
    const { isLoading } = this.props
    if (this._onMounted && !isLoading) {
      this.updateContent()
    }
  }

  render() {
    return null
  }
}

export { AppLayout, Dialog }
export default Page
