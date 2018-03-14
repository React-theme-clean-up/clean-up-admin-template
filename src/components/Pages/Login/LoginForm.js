// @flow
import React from 'react'
import { connect } from 'react-redux'
import { setCommonLogin, setActiveDialog } from 'ducks/app'
import { REDUCER, submit } from 'ducks/login'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'

const FormItem = Form.Item

const mapStateToProps = (state, props) => ({
  isSubmitForm: state.app.submitForms[REDUCER],
  commonLogin: state.app.commonLogin,
})

const formOptions = {
  onValuesChange: (props, values) => {
    if (values.hasOwnProperty('username')) {
      props.dispatch(setCommonLogin(values['username']))
    }
  },
}

@connect(mapStateToProps)
@Form.create(formOptions)
class LoginForm extends React.Component {
  static defaultProps = {}

  // $FlowFixMe
  onSubmit = (isSubmitForm: ?boolean) => event => {
    event.preventDefault()
    const { form, dispatch } = this.props
    if (!isSubmitForm) {
      form.validateFields((error, values) => {
        if (!error) {
          dispatch(submit(values))
        }
      })
    }
  }

  // $FlowFixMe
  showDialog = (dialog: string) => event => {
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(setActiveDialog(dialog))
  }

  render() {
    const { form, isSubmitForm, commonLogin } = this.props

    return (
      <div className="cat__pages__login__block__form">
        <h4 className="text-uppercase">
          <strong>Please log in</strong>
        </h4>
        <br />
        <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit(isSubmitForm)}>
          <FormItem label="Email">
            {form.getFieldDecorator('username', {
              initialValue: commonLogin,
              rules: [
                { type: 'email', message: 'The input is not a valid e-mail address' },
                { required: true, message: 'Please input your e-mail address' },
              ],
            })(<Input size="default" />)}
          </FormItem>
          <FormItem label="Password">
            {form.getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your password' }],
            })(<Input size="default" type="password" />)}
          </FormItem>
          <div className="mb-2">
            <Link
              to={`/register`}
              onClick={this.showDialog('resetPassword')}
              className="cat__core__link--blue cat__core__link--underlined"
            >
              Forgot password
            </Link>
          </div>
          <div className="rfq__utility__form-fix" />
          <div className="form-actions">
            <Button type="primary" className="width-100" htmlType="submit" loading={isSubmitForm}>
              Login
            </Button>
            <Link to={`/registration`} className="ml-3">
              <Button className="width-100" htmlType="submit">
                Sign Up
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    )
  }
}

export default LoginForm
