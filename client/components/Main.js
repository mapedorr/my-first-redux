import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxtagram</Link>
        </h1>
        {
        /*
        El children lo pasa el Router y se configura con el <IndexRoute> o
        un <Route> en "reduxstagram.js".

        (!) Esa clonación es la que hace posible que los datos y las acciones
        puestas en <Main /> gracias al "connect" de Redux se pasen a los componentes
        hijo sin necesidad de pasarlas manualmente con props.
        */
        }
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
