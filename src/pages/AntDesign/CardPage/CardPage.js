// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import CardPageItems from 'components/AntComponents/CardPage/index'

class CardPage extends React.Component {
  static defaultProps = {
    pathName: 'Card',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Card" />
        <CardPageItems />
      </Page>
    )
  }
}

export default CardPage
