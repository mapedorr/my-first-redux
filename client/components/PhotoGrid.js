import React, { Component } from 'react';
import Photo from './Photo';

export default class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} idx={i} post={post} />
        ))}
      </div>
    );
  }
}
