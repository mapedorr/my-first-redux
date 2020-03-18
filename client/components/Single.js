import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
  handleSandwiches() {
    this.props.makeASandwichWithSecretSauce('Carenalga')
  }

  render() {
    /* La llave del params (postId) se definió en reduxtagram.js, al crear
      el <Route> que carga este componente cuando se hace clic en la imagen. */
    const { postId } = this.props.params
    const i = this.props.posts.findIndex(post => post.code === postId)
    const post = this.props.posts[i]
    const postComments = this.props.comments[postId] || []

    return (
      <div className='single-photo'>
        <Photo idx={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
}

export default Single
