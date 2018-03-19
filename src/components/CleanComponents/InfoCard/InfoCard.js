import React from 'react'
import './InfoCard.css'
import { stats, information } from './data.json'

class InfoCard extends React.Component {
  state = {
    form: 'stats',
    icon: 'bullhorn',
    type: 'success',
    className: 'infoCard',
  }

  getParams = () => {
    let params = this.props
    let { form, icon, type, className } = this.state

    console.log(params)

    if (params.form !== undefined) {
      form = params.form
    }

    if (params.icon !== undefined) {
      icon = params.icon
    }

    if (params.type !== undefined) {
      className = className + ' infoCard--' + params.type
      type = params.type
    } else {
      className = className + '  infoCard--' + type
    }

    this.setState({
      form: form,
      icon: icon,
      type: type,
      className: className,
    })
  }

  componentWillMount() {
    this.getParams()
  }

  render() {
    const { form, icon, className, type } = this.state

    return (
      <div>
        {form === 'stats' &&
          <div className={className + ' mb-4'}>
            <span className="infoCard__digit">
              <i className={'icmn-' + icon} />
            </span>
            <div className="infoCard__desc">
              <span className="infoCard__title">
                {stats.title}
              </span>
              <p>
                Total: {stats.count}
              </p>
            </div>
          </div>}
        {form === 'interactive' &&
          <div className={className + ' infoCard--interactive px-3 py-5'}>
            <div className="infoCard__icon text-center font-size-30">
              <i className={'icmn-' + icon} />
            </div>
            <div className="mt-2 text-center">
              <div className="mb-2">
                <p>Lorem Ipsum is simply dummy text of printing the printing and typesetti...</p>
              </div>
              <a href="javascript: void(0)" className={'btn btn-outline-' + type}>
                Information
              </a>
            </div>
          </div>}
        {form === 'bordered' &&
          <div className={className + ' infoCard--bordered'}>
            <span className="infoCard__digit">
              <i className={'icmn-' + icon} />
            </span>
            <div className="infoCard__desc">
              <span className="infoCard__title">
                {stats.title}
              </span>
              <p>
                {stats.descr}
              </p>
            </div>
          </div>}
      </div>
    )
  }
}

export default InfoCard
