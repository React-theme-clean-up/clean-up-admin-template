
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import FormPageItems from 'components/AntDesign/FormPage/index'

class FormPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <FormPageItems />
      </Page>
    )
  }
}

export default FormPage
