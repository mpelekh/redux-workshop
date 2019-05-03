import React, { Component } from 'react'
import BlogEntries from '../components/BlogEntries'
import DetailedPost from '../components/DetailedPost'
import initialData from '../samples/initial-data'

class Home extends Component {
  render() {
    const {
      match: { params }
    } = this.props

    return params.id ? (
      <DetailedPost
        comments={initialData.comments}
        {...initialData.posts.find(({ id }) => id === Number(params.id))}
      />
    ) : (
      <BlogEntries posts={initialData.posts} />
    )
  }
}

export default Home
