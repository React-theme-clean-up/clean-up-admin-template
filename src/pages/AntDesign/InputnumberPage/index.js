import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import InputnumberItems from 'components/AntComponents/Inputnumber/index'

class InputnumberPage extends React.Component {
  static defaultProps = {
    pathName: 'Input Number',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Input Number" />
        <InputnumberItems />
      </Page>
    )
  }
}

export default InputnumberPage
