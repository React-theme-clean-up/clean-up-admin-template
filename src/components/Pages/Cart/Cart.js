import React from 'react'
import { Steps, Button, message, Icon } from 'antd'
import './Cart.css'

const Step = Steps.Step

const steps = [
  {
    title: 'Cart',
    icon: <Icon type="shopping-cart" style={{ fontSize: 40 }} />,
  },
  {
    title: 'Shipment and Payment',
    icon: <Icon type="tags" style={{ fontSize: 40 }} />,
  },
  {
    title: 'Confirmation',
    icon: <Icon type="credit-card" style={{ fontSize: 40 }} />,
  },
]

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }

  next() {
    const current = this.state.current + 1
    this.setState({ current })
  }

  prev() {
    const current = this.state.current - 1
    this.setState({ current })
  }

  render() {
    const { current } = this.state

    return (
      <div className="card-body">
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} icon={item.icon} />)}
        </Steps>
        <div className="steps-content">
          {steps[this.state.current].content}
        </div>
        <div className="steps-action">
          {this.state.current < steps.length - 1 &&
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>}
          {this.state.current === steps.length - 1 &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>}
          {this.state.current > 0 &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>}
        </div>
      </div>
    )
  }
}

export default Cart
