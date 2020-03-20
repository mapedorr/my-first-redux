import React, { Component } from 'react'

export default class Posts extends Component {
  componentDidMount() {
    this.props.getAllPosts()
  }

  render() {
    return (
      <div className='posts_page'>
        {/* <h1>Aquí se muestrarán los POSTS</h1> */}
        {this.props.posts.map((post, idx) => (
          <p key={idx}>{post.title}</p>
        ))}
      </div>
    )
  }
}
