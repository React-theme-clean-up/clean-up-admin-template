import React from 'react'
import { Form, Input, Icon } from 'antd'

const FormItem = Form.Item

class CartCheckoutForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form>
        <h4 className="text-black mb-3">
          <strong>Shipment Details</strong>
        </h4>
        <div className="row">
          <div className="col-md-6">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your Email!' }],
              })(
                <div className="form-group">
                  <label htmlFor="checkout-email">Email</label>
                  <Input id="checkout-email" placeholder="Email" />
                </div>,
              )}
            </FormItem>
          </div>
          <div className="col-md-6">
            <FormItem>
              {getFieldDecorator('phoneNumber', {
                rules: [{ required: true, message: 'Please input your Phone Number!' }],
              })(
                <div className="form-group">
                  <label htmlFor="checkout-phnum">Phone Number</label>
                  <Input id="checkout-phnum" placeholder="Phone Number" />
                </div>,
              )}
            </FormItem>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your Name!' }],
              })(
                <div className="form-group">
                  <label htmlFor="checkout-name">Name</label>
                  <Input id="checkout-name" placeholder="Name" />
                </div>,
              )}
            </FormItem>
          </div>
          <div className="col-md-6">
            <FormItem>
              {getFieldDecorator('surname', {
                rules: [{ required: true, message: 'Please input your Surname!' }],
              })(
                <div className="form-group">
                  <label htmlFor="checkout-surname">Surname</label>
                  <Input id="checkout-surname" placeholder="Surname" />
                </div>,
              )}
            </FormItem>
          </div>
        </div>
        <FormItem>
          {getFieldDecorator('city', {
            rules: [{ required: true, message: 'Please input your City!' }],
          })(
            <div className="form-group">
              <label htmlFor="checkout-city">City</label>
              <Input id="checkout-city" placeholder="City" />
            </div>,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('adress', {
            rules: [{ required: true, message: 'Please input your Adress!' }],
          })(
            <div className="form-group">
              <label htmlFor="checkout-adress">Adress</label>
              <Input id="checkout-adress" placeholder="Adress" className="mb-3" />
            </div>,
          )}
        </FormItem>
        <h4 className="text-black mb-3">
          <strong>Billing Details</strong>
        </h4>
        {getFieldDecorator('cardnum', {
          rules: [{ required: true, message: 'Please input Card Number!' }],
        })(
          <div className="form-group">
            <label htmlFor="checkout-cardnum">Card Number</label>
            <Input
              addonBefore={<Icon type="credit-card" />}
              id="checkout-cardnum"
              placeholder="Card Number"
            />
          </div>,
        )}
        <div className="row">
          <div className="col-md-7">
            {getFieldDecorator('expirationdate', {
              rules: [{ required: true, message: 'Please input Card Expiration Date!' }],
            })(
              <div className="form-group">
                <label htmlFor="checkout-cardexpdate">Expiration Date</label>
                <Input id="checkout-cardexpdate" placeholder="MM / YY" />
              </div>,
            )}
          </div>
          <div className="col-md-5 pull-right">
            {getFieldDecorator('cardcvc', {
              rules: [{ required: true, message: 'Please input Card CVC!' }],
            })(
              <div className="form-group">
                <label htmlFor="checkout-cardholder">CVC</label>
                <Input id="checkout-cardholder" placeholder="CVC" />
              </div>,
            )}
          </div>
        </div>
        {getFieldDecorator('cardholdername', {
          rules: [{ required: true, message: 'Please input Card Holder Name!' }],
        })(
          <div className="form-group">
            <label htmlFor="checkout-cardholder">Card Holder Name</label>
            <Input id="checkout-cardholder" placeholder="Name and Surname" />
          </div>,
        )}
      </Form>
    )
  }
}

const WrappedCartCheckoutForm = Form.create()(CartCheckoutForm)

export default WrappedCartCheckoutForm
