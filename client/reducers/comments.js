// Esta función aplica lo que en Redux se conoce como composición de reducers.
// Es algo así como un sub-reducer que sólo es conocido y usado por uno de los
// reducer registrado en la aplicación.

import {
  /* ADD_COMMENT,
  REMOVE_COMMENT, */
  GET_COMMENTS_FOR,
  GET_COMMENTS_FOR_ERR
} from '../actions'
/*
const postComments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      // Retornar el estado recibido pero con el nuevo comentario agregado
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ]
    case REMOVE_COMMENT:
      return [
        // Copiar el arreglo hasta el elemento a eliminar
        ...state.slice(0, action.i),
        // Copiar el arreglo después del elemento a eliminar
        ...state.slice(action.i + 1)
      ]
    default:
      return state
  }
}
 */
const comments = (state = [], action) => {
  if (typeof action.postId !== 'undefined') {
    switch (action.type) {
      case GET_COMMENTS_FOR:
        return {
          ...state,
          [action.postId]: action.comments
        }
      case GET_COMMENTS_FOR_ERR:
        console.log('¡ERR!', action.msg, action.postId, action.error)
        return state
      default:
        return state
    }

    /* return {
      // El estado original. Tiene el objeto de comentarios: root://data/comments.js
      ...state,
      // Sobrescribir el post que se está modificando
      [action.postId]: postComments(state[action.postId], action)
    } */
  }

  return state
}

export default comments
