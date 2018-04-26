import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import ButtonItems from 'components/AntDesign/Button/index'

class ButtonPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <ButtonItems />
      </Page>
    )
  }
}

export default ButtonPage
