import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class DetailedPost extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    comments: PropTypes.array
  }

  render() {
    const { title, body, date, author, comments } = this.props

    return (
      <div className="col-lg-8">
        {/* Title */}
        <h1 className="mt-4">{title}</h1>

        {/* Author */}
        <p className="lead">
          by <a href="">{author}</a>
        </p>

        <hr />

        {/* Date/Time */}
        <p>Posted on {date}</p>

        <hr />

        {/* Preview Image */}
        <img
          className="img-fluid rounded"
          src="http://placehold.it/900x300"
          alt=""
        />

        <hr />

        {/* Post Content */}
        {body}

        <hr />

        {/* Comments Form */}
        <div className="card my-4">
          <h5 className="card-header">Leave a Comment:</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <textarea className="form-control" rows="3" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        {comments.map(({ email, body, id }) => (
          <div className="media mb-4" key={id}>
            <img
              className="d-flex mr-3 rounded-circle"
              src="http://placehold.it/50x50"
              alt=""
            />
            <div className="media-body">
              <h5 className="mt-0">{email}</h5>
              {body}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default DetailedPost
