// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'

const mapStateToProps = (state, props) => {}

@connect(mapStateToProps)
class Search extends React.Component {
  render() {
    return (
      <div className="cat__top-bar__search">
        <i className="icmn-search" />
        <Input size="small" type="text" placeholder="Type of search..." />
      </div>
    )
  }
}

export default Search
