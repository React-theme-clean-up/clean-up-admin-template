import 'rc-drawer-menu/assets/index.css'
import React from 'react'
import DrawerMenu from 'rc-drawer-menu'
import { MenuSider } from './MenuSider'
import { connect } from 'react-redux'
import { setLayoutState } from 'ducks/app'
import './style.scss'

const mapStateToProps = (state, props) => ({
  layoutState: state.app.layoutState,
})

@connect(mapStateToProps)
class AppMenu extends React.Component {
  state = {
    menuMobileOpened: this.props.layoutState.menuMobileOpened,
  }

  toggleOpen = () => {
    const { dispatch } = this.props
    dispatch(setLayoutState({ menuMobileOpened: !this.state.menuMobileOpened }))
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      menuMobileOpened: newProps.layoutState.menuMobileOpened,
    })
  }

  render() {
    const { isMobile } = this.props
    const { menuMobileOpened } = this.state
    return isMobile ? (
      <DrawerMenu
        parent={null}
        level={null}
        open={menuMobileOpened}
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
