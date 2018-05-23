import React from 'react'
import AddForm from './AddForm'
import './style.scss'

class BlogAddPost extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header mb-2">
          <h5 className="mb-0 mr-3 d-inline-block text-black">
            <strong>Post Add/Edit</strong>
          </h5>>
        </div>
        <div className="card-block">
          <div className="add-post">
            <div className="container">
              <AddForm />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default BlogAddPost
