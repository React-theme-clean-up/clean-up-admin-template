// @flow
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () =>
  <div className="rfq__not-found-page pt-5">
    <div className="row">
      <div className="col-lg-3 offset-lg-3">
        <div className="rfq__not-found-page__text pr-5 pl-5 pb-5 mb-5">
          <img
            className="img-fluid width-200 mb-5"
            src="/modules/rfqueue/common/img/logo.png"
            alt="Page Not Found"
          />
          <h1 className="font-size-36">Page not found</h1>
          <p className="mt-3 mb-5">The page is deprecated, deleted, or does not exist at all</p>
          <Link to="/" className="btn">
            Go back to the main page
          </Link>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="rfq__not-found-page__img">
          <img
            className="img-fluid"
            src="/modules/rfqueue/common/img/404.png"
            alt="Page Not Found"
          />
        </div>
      </div>
    </div>
  </div>

export default NotFoundPage
