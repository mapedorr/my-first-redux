import React from 'react'
import { render } from 'react-dom'

// import styles
import css from './styles/style.styl'

// import components
import App from './components/App'

/* import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single' */

import Home from './components/Home'
import Posts from './components/Posts'
import Albums from './components/Albums'
import Todos from './components/Todos'

// import React's router
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

// import Sentry
/* import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://cdb3d2dde41d4101b7cdcee0d7e8293e@sentry.io/5021553'
}) */

/*
Con la nueva versión de Sentry, queda pendiente pillar:
  - lo de los tags,
  - lo de los custom errors,
  - lo de mostrar una ventana emergente al usuario para que reporte un error,
  - ...
*/

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        {/* Estos componentes son lo que se recibirán como props.children en el
        componente Main */}
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/posts' component={Posts}></Route>
        <Route path='/albums' component={Albums}></Route>
        {/* <Route path='/photos/:albumId' component={Photos}></Route> */}
        <Route path='/todos' component={Todos}></Route>
        {/* <Route path='/view/:postId' component={Single}></Route> */}
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
