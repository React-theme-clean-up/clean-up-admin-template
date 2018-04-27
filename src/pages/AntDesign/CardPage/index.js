import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import CardItems from 'components/AntDesign/Card/index'

class CardPage extends React.Component {
  static defaultProps = {
    pathName: 'Card',
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
