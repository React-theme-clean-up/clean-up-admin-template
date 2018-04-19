// @flow
import React from 'react'

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const pure = (fn: Function) => {
  class Wrapper extends React.PureComponent {
    render() {
      return fn(this.props, this.context)
    }
  }
  // Wrapper.contextTypes = fn.contextTypes
  Wrapper.displayName = `pure(${fn.name})`
  return Wrapper
}

// http://youmightnotneedjquery.com/#toggle_class
export const toggleClass = (element: HTMLElement, className: string) => {
  if (element.classList) {
    element.classList.toggle(className)
  } else {
    const classes = element.className.split(' ')
    const existingIndex = classes.indexOf(className)

    if (existingIndex >= 0) classes.splice(existingIndex, 1)
    else classes.push(className)

    element.className = classes.join(' ')
  }
}

// http://youmightnotneedjquery.com/#remove_class
export const removeClass = (element: HTMLElement, className: string) => {
  if (element.classList) element.classList.remove(className)
  else
    element.className = element.className.replace(
      new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'),
      ' ',
    )
}

// $FlowFixMe
export const preventDefault = event => event.preventDefault()
