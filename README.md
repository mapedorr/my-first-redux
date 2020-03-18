# React + Redux
Uso de React y Redux para practicar nomás.

Hecho con base en el curso de [@Wes Bos](https://twitter.com/wesbos) 👉 [Learn Redux](https://learnredux.com/) 👈.

### ¿Cómo hacerlo correr en desarrollo (dev)?
1. Instalar todas las dependencias con `npm install` o `npm i`.
2. Ejecutar `npm start`. Se abrirá una pestaña del navegador por defecto en <localhost:7770>.

### ¿Cómo hacer el build? ( 😒 ¡aún no! 😖 )
1. Tienen que estar ya instaladas las dependencias 👆.
2. Ejecutar `npm build`. Eso creará el directorio **static** con todo el código JavaScript empaquetado en un `bundle.js`.

# ¿Qué hace Redux?

Crear un STORE en lugar de usar los diferentes state de los múltiples componentes que puede tener una aplicación React.

## Acciones
Ese STORE se actualiza usando acciones. Cada acción está compuesta por dos cosas: un tipo (lo que pasó) y unos datos (payload).

Por lo general esos datos que se "cargan" a la acción son los que se usarán para actualizar lo que hay en el STORE.

## Reductores
Son los que se encargan de hacer algo cuando las acciones son ejecutadas (o disparadas). Todos los reductores se disparan a la vez para cada acción, por eso la lógica dentro de los mismos dice si la acción se ignora (retornando el *state*) o si se hace algo con ella.

## Conexión
La función *connect* del módulo `react-redux` es la que hace que el STORE funcione dentro de la aplicación. Dicha función recibe dos funciones: una con la que convertirá los datos en el STORE a *props*, y otra con la que convertirá los reductores a *props*.

```javascript
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)
```

El *state* que recibe la función `mapStateToProps` se configura en el `store.js` cuando se crea el `defaultState` a partir de los objetos que contienen las publicaciones (*posts*) y los comentarios.

```javascript
import comments from './data/comments'
import posts from './data/posts'

const defaultState = { comments, posts }

...

const store = createStore(
  ...
  defaultState
)
```
## Por hacer

- [ ] Tomar los datos de una API haciendo uso de: [Redux Thunk](https://github.com/reduxjs/redux-thunk) o [Redux Saga](https://redux-saga.js.org/). 

  *Los reductores no pueden funcionar de manera asíncrona por ser funciones puras. Los módulos que exponen estas dos librerías tienen funciones para manejar la parte asíncrona antes de pasar los datos a los reductores (o sea, antes de disparar las acciones)*.

- [ ] Hacer que la aplicación ✨ se vea menos paila ✨. El estilo visual que esta tiene ahora mismo no me gusta en absoluto.
- [ ] Actualizar los textos en inglés para este README.
- [ ] Hacer funcionar `npm run build` y actualizar la descripción del README.

---
---
---
# React + Redux
Use of React + Redux just for practicing.