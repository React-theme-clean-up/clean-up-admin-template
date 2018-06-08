import 'rc-drawer-menu/assets/index.css'
import React from 'react'
import DrawerMenu from 'rc-drawer-menu'
import { MenuSider } from './MenuSider'
import { connect } from 'react-redux'
import { setLayoutState } from 'ducks/app'
import './style.scss'

const mapStateToProps = ({app}, props) => ({
  open: app.layoutState.menuMobileOpened,
})

@connect(mapStateToProps)
class AppMenu extends React.Component {
  state = {
    open: this.props.open,
  }

  toggleOpen = () => {
    const { dispatch } = this.props
    const { open } = this.state
    dispatch(setLayoutState({ menuMobileOpened: !open }))
  }

  componentWillReceiveProps({open}) {
    this.setState({
      open,
    })
  }

  render() {
    const { isMobile } = this.props
    const { open } = this.state
    return isMobile ? (
      <DrawerMenu
        parent={null}
        level={null}
        open={open}
        onMaskClick={this.toggleOpen}
        onIconClick={this.toggleOpen}
        width="256px"
      >
        <MenuSider {...this.props} />
      </DrawerMenu>
    ) : (
      <MenuSider {...this.props} />
    )
  }
}

export default AppMenu
