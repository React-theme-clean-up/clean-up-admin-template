import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import ButtonItems from 'components/AntComponents/Button/index'

class ButtonPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
    roles: ['agent', 'administrator'],
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
