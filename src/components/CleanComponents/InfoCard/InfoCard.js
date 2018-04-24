import React from 'react'
import './InfoCard.css'
import { stats, commerceStats } from './data.json'

class InfoCard extends React.Component {
  state = {
    form: 'stats',
    icon: 'bullhorn',
    type: '',
    className: 'infoCard',
    btnType: 'default',
  }

  getParams = () => {
    let params = this.props
    let { form, icon, type, className, btnType } = this.state

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

    if (params.btnType !== undefined) {
      btnType = params.btnType
    } else {
      btnType = type
    }

    this.setState({
      form: form,
      icon: icon,
      type: type,
      className: className,
      btnType: btnType,
    })
  }

  componentWillMount() {
    this.getParams()
  }

  render() {
    const { form, icon, className, btnType } = this.state

    return (
      <div>
        {form === 'stats' &&
          <div className={className + ' mb-4'}>
            {icon !== false &&
              <span className="infoCard__digit">
                <i className={'icmn-' + icon} />
              </span>}
            <div className="infoCard__desc">
              <span className="infoCard__title">
                {stats.title}
              </span>
              <p>
                Total: {stats.count}
              </p>
            </div>
          </div>}
        {form === 'stats-large' &&
          <div className={className + ' mb-4'}>
            <h5 className="text-uppercase mb-3 text-white">
              {commerceStats.title}
            </h5>
            <div className="clearfix" />
            <div>
              <span className="pull-right font-size-36">
                <strong>
                  {commerceStats.count}
                </strong>
              </span>
              {icon !== false && <i className={'font-size-36 icmn-' + icon} />}
            </div>
          </div>}
        {form === 'interactive' &&
          <div className={className + ' infoCard--interactive px-3 py-5 mb-4'}>
            {icon !== false &&
              <div className="infoCard__icon text-center font-size-30">
                <i className={'icmn-' + icon} />
              </div>}
            <div className="mt-2 text-center">
              <div className="mb-2">
                <p>Lorem Ipsum is simply dummy text of printing the printing and typesetti...</p>
              </div>
              <a href={''} className={'btn btn-outline-' + btnType}>
                Information
              </a>
            </div>
          </div>}
        {form === 'bordered' &&
          <div className={className + ' infoCard--bordered mb-4'}>
            {icon !== false &&
              <span className="infoCard__digit">
                <i className={'icmn-' + icon} />
              </span>}
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
