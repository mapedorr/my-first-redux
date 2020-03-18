/*
La forma en como funciona Redux y su store es como un historial de acciones.
En cierto sentido me hace pensar en el patrón de programación de juegos Command...
o no recuerdo cuál es el que almacena acciones (como un historial) que luego se
puede usar para devolver el tiempo o mostrar un replay.

Esto podría usarlo para hacer el BackOS. Que el juego al iniciar tenga una base
de datos de acciones hechas por el usuario del computador que el jugador va a
chismosear y con eso podría ser en cierto sentido procedimental... ¡ALGO ASÍ
COMO UN ROGUELIKE DE ADELANTE PARA ATRÁS... DONDE EL JUGADOR VE QUÉ HIZO EL
PERSONAJE PARA TRATAR DE... NO SÉ.!
════════════════════════════════════════════════════════════════════════════════
Las acciones que almacena el historial de Redux son objetos.
*/

// Importar cosas de Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// Importar el Redux Thunk
import thunk from 'redux-thunk'

// Importar el root reducer
import reducer from './reducers/index'


// Importar datos quemados
import comments from './data/comments'
import posts from './data/posts'

// Crear objeto que contendrá los datos cargados por defecto
// Para cada estado se debe crear un reducer.
const defaultState = { comments, posts }

/* Es necesario combinar el middleware y la cosa que hace funcionar el Redux Tools
en una única función para que no haya problema al crear el STORE.
Tomado de 👉 https://stackoverflow.com/questions/38074154/redux-the-previous-state-received-by-the-reducer-has-unexpected-type-of-funct
*/
const middlewareAndTools = compose(
  applyMiddleware(thunk),
  /* Para que Redux Tools pueda tener acceso al store y darnos control sobre lo
  que ocurre, hay que "mejorar" el store */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Crear el Store
const store = createStore(
  reducer,
  defaultState,
  middlewareAndTools
)

// ╔═══════════════════════════════════════════════════════════════════════════╗
// Para que Webpack registre los cambios en los reducers hay que hacer una
// cosa adicional
if (module.hot) {
  // Lo que se hace es reemplazar el reducer que contiene a todos los reducers
  // con él mismo...
  module.hot.accept('./reducers/', () => {
    // El default es el rootReducer dentro de reducers/index.js
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}
// ╚═══════════════════════════════════════════════════════════════════════════╝

export const history = syncHistoryWithStore(browserHistory, store)
export default store
