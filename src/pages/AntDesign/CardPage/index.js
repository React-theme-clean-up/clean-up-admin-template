import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import CardItems from 'components/AntComponents/Card/index'

class CardPage extends React.Component {
  static defaultProps = {
    pathName: 'Card',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Card" />
        <CardItems />
      </Page>
    )
  }
}

export default CardPage
