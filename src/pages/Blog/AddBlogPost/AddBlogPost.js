import React from 'react'
import AddBlogPostForm from './AddBlogPostForm'
import './AddBlogPost.css'

class AddBlogPost extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header mb-2">
          <div className="cat__core__title">
            <strong>Post Add/Edit</strong>
          </div>
        </div>
        <div className="card-block">
          <div className="add-post">
            <div className="container">
              <AddBlogPostForm />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AddBlogPost
