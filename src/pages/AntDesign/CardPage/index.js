import React from 'react'
import Page from 'components/LayoutComponents/Page'
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
        <Helmet title="Card" />
        <CardItems />
      </Page>
    )
  }
}

export default CardPage
