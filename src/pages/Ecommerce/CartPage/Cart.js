import React from 'react'
import { Steps, Button, message, Icon, Table, InputNumber } from 'antd'
import WrappedCartCheckoutForm from './CartCheckoutForm'
import Invoice from 'components/CleanComponents/Invoice/Invoice'
import data from './data.json'
import './Cart.css'

const Step = Steps.Step

class Cart extends React.Component {
  state = {
    ordersTableData: [],
    invoicePrices: {},
  }

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

  componentWillMount() {
    this.setState({
      ordersTableData: data.ordersTableData,
      invoicePrices: data.invoicePrices,
    })
  }

  render() {
    let { current, ordersTableData, invoicePrices } = this.state

    const columns = [
      {
        title: '#',
        dataIndex: 'number',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        render: text =>
          <a className="cat__core__link--underlined" href="#">
            {text}
          </a>,
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        render: text => <InputNumber defaultValue={text} size="small" />,
      },
      {
        title: 'Unit Cost',
        dataIndex: 'unitcost',
      },
      {
        title: 'Total',
        dataIndex: 'total',
      },
      {
        title: '',
        dataIndex: '',
        render: () =>
          <a className="cat__core__link--underlined" href="#">
            Remove
          </a>,
      },
    ]

    const steps = [
      {
        title: 'Cart',
        icon: <Icon type="shopping-cart" style={{ fontSize: 40 }} />,
        content: (
          <div>
            <Table dataSource={ordersTableData} columns={columns} pagination={false} />
            <div className="text-right clearfix mt-4">
              <div className="pull-right">
                <p>
                  Sub - Total amount:{' '}
                  <strong>
                    <span>
                      {invoicePrices.invoiceAmount}
                    </span>
                  </strong>
                </p>
                <p>
                  VAT:{' '}
                  <strong>
                    <span>
                      {invoicePrices.invoiceVAT}
                    </span>
                  </strong>
                </p>
                <p>
                  <strong>
                    Grand Total: <span>{invoicePrices.invoiceTotal}</span>
                  </strong>
                </p>
                <br />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Shipment and Payment',
        icon: <Icon type="tags" style={{ fontSize: 40 }} />,
        content: (
          <div className="row">
            <div className="col-md-8">
              <WrappedCartCheckoutForm />
            </div>
            <div className="col-md-4">
              <h4 className="text-black mb-3">
                <strong>General Info</strong>
              </h4>
              <h2>
                <i className="fa fa-cc-visa text-primary mr-1" />
                <i className="fa fa-cc-mastercard text-default mr-1" />
                <i className="fa fa-cc-amex text-default" />
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>{' '}
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.{' '}
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Confirmation',
        icon: <Icon type="credit-card" style={{ fontSize: 40 }} />,
        content: (
          <div>
            <Invoice />
          </div>
        ),
      },
    ]

    return (
      <div className="card-body cart">
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} icon={item.icon} />)}
        </Steps>
        <div className="steps-content">
          {steps[this.state.current].content}
        </div>
        <div className="steps-action text-center">
          {this.state.current > 0 &&
            <Button style={{ marginRight: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>}
          {this.state.current < steps.length - 1 &&
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>}
          {this.state.current === steps.length - 1 &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>}
        </div>
      </div>
    )
  }
}

export default Cart
