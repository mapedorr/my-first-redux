import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

export default class Photo extends Component {
  render() {
    const { post, idx, comments } = this.props

    return (
      <figure className='grid-figure'>
        <div className='gird-photo-wrap'>
          <Link to={`/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              className='grid-photo'
            />
          </Link>

          {/*
          Este componente permite hacer animaciones. Es el que Wes Bos usa en
          el curso de React para principiantes.
          */}
          <CSSTransitionGroup
            transitionName='like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span className='likes-heart' key={post.likes}>
              {post.likes}
            </span>
          </CSSTransitionGroup>

          <figcaption>
            <p>{post.caption}</p>
            <div className='control-buttons'>
              <button
                className='likes'
                /* Aquí se usa bind para que la función no se ejecute en el
                pageLoad de React. */
                onClick={this.props.incrementLike.bind(null, idx)}>
                &hearts; {post.likes}
              </button>
              <Link className='button' to={`/view/${post.code}`}>
                <span className='comment-count'>
                  <span className='speech-bubble'></span>
                  {comments[post.code] ? comments[post.code].length : 0}
                </span>
              </Link>
            </div>
          </figcaption>
        </div>
      </figure>
    )
  }
}
