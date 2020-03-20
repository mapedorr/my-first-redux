/*
Las acciones son cosas que pueden pasar en la aplicación pero no manejan nada.
Son como eventos que se pueden disparar y almacenar en el historial de Redux.

Las acciones que almacena el historial de Redux son objetos.

Wes Bos las compara con los eventos de los elementos en el navegador: hover,
click, out... son cosas que pasan pero no generan ningún cambio si no hay algo
lógico que las use. 👉👉👉 Para eso están los reducers.
*/

export const INCREMENT_LIKES = 'INCREMENT_LIKES'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const MAKE_SANDWICH = 'MAKE_SANDWICH'
export const APOLOGIZE = 'APOLOGIZE'

export const GET_POSTS = 'GET_POSTS'

const BASE = 'https://jsonplaceholder.typicode.com'

const fetchPosts = () => {
  return fetch(`${BASE}/posts`).then((response) => response.json())
}

const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    posts
  }
}

export const getAllPosts = () => {
  return (dispatch) => {
    return fetchPosts().then(
      (posts) => dispatch(getPosts(posts)),
      (error) => dispatch(apologize('The Sandwich Shop', forPerson, error))
    )
  }
}

// Acción para incrementar los likes en una foto
export const incrementLike = (index) => {
  return {
    type: INCREMENT_LIKES,
    index
  }
}
// Acción para añadir un comentario a una foto
export const addComment = (postId, author, comment) => {
  return {
    type: ADD_COMMENT,
    postId,
    author,
    comment
  }
}
// Acción para remover un comentario de una foto
export const removeComment = (postId, i) => {
  return {
    type: REMOVE_COMMENT,
    postId,
    i
  }
}

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// Acciones de prueba para Redux-Thunk
const fetchSecretSauce = () => {
  return fetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  ).then((response) => response.json())
}

const makeASandwich = (forPerson, secretSauce) => {
  return {
    type: MAKE_SANDWICH,
    forPerson,
    secretSauce
  }
}

const apologize = (fromPerson, toPerson, error) => {
  return {
    type: APOLOGIZE,
    fromPerson,
    toPerson,
    error
  }
}

export const makeASandwichWithSecretSauce = (forPerson) => {
  // We can invert control here by returning a function - the "thunk".
  // When this function is passed to `dispatch`, the thunk middleware will intercept it,
  // and call it with `dispatch` and `getState` as arguments.
  // This gives the thunk function the ability to run some logic, and still interact with the store.
  return (dispatch) => {
    return fetchSecretSauce().then(
      (sauce) => dispatch(makeASandwich(forPerson, sauce)),
      (error) => dispatch(apologize('The Sandwich Shop', forPerson, error))
    )
  }
}
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
