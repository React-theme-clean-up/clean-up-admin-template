import React from 'react'
import './style.scss'

class Donut extends React.Component {
  state = {
    name: 'Donut',
    type: 'default',
    color: undefined,
  }

  getParams = () => {
    let params = this.props
    this.setState({
      ...params,
    })
  }

  componentWillMount() {
    this.getParams()
  }

  render() {
    const { name, color, type } = this.state

    return (
      <span className="mr-2 nowrap">
        <span
          className={color === undefined ? 'donut donut--' + type : 'donut'}
          style={color !== undefined ? { borderColor: color } : {}}
        />
        {name}
      </span>
    )
  }
}

export default Donut
