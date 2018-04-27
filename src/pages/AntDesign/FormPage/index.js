import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import FormItems from 'components/AntDesign/Form/index'

class FormPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <FormItems />
      </Page>
    )
  }
}

export default FormPage
