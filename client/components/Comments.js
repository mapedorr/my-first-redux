import React, { Component } from 'react'

export default class Comments extends Component {
  handleSubmit(e) {
    e.preventDefault()

    const { postId } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value

    this.props.addComment(postId, author, comment)

    // Limpiar el formulario una vez se ha modificado el comentario
    this.refs.commentForm.reset()
  }

  renderComment(comment, idx) {
    return (
      <div className='comment' key={idx}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className='remove-comment'
            onClick={this.props.removeComment.bind(
              null,
              this.props.params.postId,
              idx
            )}>
            ✖
          </button>
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.renderComment.bind(this))}
        <form
          className='comment-form'
          ref='commentForm'
          onSubmit={this.handleSubmit.bind(this)}>
          {/* Se ponen [ref] en los <input> para que queden en el objeto
          "this.refs" del Component de React */}
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}
