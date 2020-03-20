import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  getLocation() {
    return this.props.location.pathname.slice(1)
  }

  render() {
    return (
      <header>
        <nav className='navbar_menu'>
          <h1>
            <Link to='/'>- SuperWeb -</Link>
          </h1>
          <ul>
            <li>
              <Link
                to='/'
                className={this.getLocation() === '' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/posts'
                className={this.getLocation() === 'posts' ? 'active' : ''}>
                Posts
              </Link>
            </li>
            <li>
              <Link
                to='/albums'
                className={this.getLocation() === 'albums' ? 'active' : ''}>
                Albums
              </Link>
            </li>
            <li>
              <Link
                to='/todos'
                className={this.getLocation() === 'todos' ? 'active' : ''}>
                ToDos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
