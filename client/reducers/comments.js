// Esta función aplica lo que en Redux se conoce como composición de reducers.
// Es algo así como un sub-reducer que sólo es conocido y usado por uno de los
// reducer registrado en la aplicación.
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // Retornar el estado recibido pero con el nuevo comentario agregado
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ]
    case 'REMOVE_COMMENT':
      return [
        // Copiar el arreglo hasta el elemento a eliminar
        ...state.slice(0, action.i),
        // Copiar el arreglo después del elemento a eliminar
        ...state.slice(action.i + 1),
      ]
    default:
      return state
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // El estado original
      ...state,
      // Sobrescribir el post que se está modificando
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

export default comments
