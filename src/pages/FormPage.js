// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import FormPageItems from 'components/AntComponents/FormPage/index'

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
