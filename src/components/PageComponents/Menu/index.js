import 'rc-drawer-menu/assets/index.css'
import React from 'react'
import DrawerMenu from 'rc-drawer-menu'
import { Scrollbars } from 'react-custom-scrollbars'
import { MenuSider } from './MenuSider'
import { connect } from 'react-redux'
import { setOpenedMenuMobile } from 'ducks/app'
import './style.css'

const mapStateToProps = (state, props) => ({
  openedMenuMobile: state.app.openedMenuMobile,
})

@connect(mapStateToProps)
class AppMenu extends React.Component {
  state = {
    open: this.props.openedMenuMobile,
  }

  toggleOpen = () => {
    const { dispatch } = this.props
    dispatch(setOpenedMenuMobile(!this.state.open))
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      open: newProps.openedMenuMobile,
    })
  }

  render() {
    const { isMobile } = this.props
    const { open } = this.state
    return isMobile
      ? <DrawerMenu
          parent={null}
          level={null}
          open={open}
          onMaskClick={this.toggleOpen}
          onIconClick={this.toggleOpen}
          width="256px"
        >
          <Scrollbars style={{ height: '100vh' }}>
            <MenuSider {...this.props} />
          </Scrollbars>
        </DrawerMenu>
      : <MenuSider {...this.props} />
  }
}

export default AppMenu
