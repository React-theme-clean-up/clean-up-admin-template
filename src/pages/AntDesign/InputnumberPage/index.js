import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import InputnumberItems from 'components/AntDesign/Inputnumber/index'

class InputnumberPage extends React.Component {
  static defaultProps = {
    pathName: 'Input Number',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Input Number" />
        <InputnumberItems />
      </Page>
    )
  }
}

export default InputnumberPage
