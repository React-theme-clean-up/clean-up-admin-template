import React from 'react'
import item from './data.json'
import './style.scss'

class PricingItem extends React.Component {
  state = {
    data: item.item,
    btnType: 'primary',
    type: '',
    extended: false,
    mainClass: 'pricing-table__item ',
    btnClass: 'btn',
  }

  getParams = () => {
    let params = this.props

    let { btnType, type, extended, mainClass, btnClass } = this.state

    if (params.extended !== undefined) {
      extended = params.extended
      mainClass = mainClass + 'pricing-table__item--extended '
    }

    if (params.type !== undefined) {
      mainClass = mainClass + 'pricing-table__item--' + params.type + ' '
      btnClass = 'btn btn-outline-' + params.type
    }

    if (params.btnType !== undefined) {
      btnType = params.btnType
      if (params.type !== undefined) {
        btnClass = 'btn btn-outline-' + btnType
      } else {
        btnClass = 'btn btn-' + btnType
      }
    }

    this.setState({
      btnType: btnType,
      type: type,
      extended: extended,
      mainClass: mainClass,
      btnClass: btnClass,
    })
  }

  componentWillMount() {
    this.getParams()
  }

  render() {
    const { data, mainClass, btnClass } = this.state

    return (
      <div className={mainClass}>
        <div className="pricing-table__header">
          <div className="pricing-table__pricing__price">
            <span className="pricing-table__pricing__currency">{data.currency}</span>
            <span className="pricing-table__pricing__amount">{data.amount}</span>
            <span className="pricing-table__pricing__period">{data.period}</span>
          </div>
          <div className="pricing-table__header__title">{data.title}</div>
        </div>
        <ul className="pricing-table__features">
          {data.features.map((feature, index) => (
            <li key={index}>
              <strong>{feature.main}</strong>
              {' ' + feature.descr}
            </li>
          ))}
        </ul>
        <div className="pricing-table__footer">
          <a href="javascript: void(0);" className={btnClass} role="button">
            <i className="icmn-download mr-3" aria-hidden="true" />
            {data.btnText}
          </a>
        </div>
      </div>
    )
  }
}

export default PricingItem
