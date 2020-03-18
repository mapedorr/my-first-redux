/* 
Las acciones son cosas que pueden pasar en la aplicación pero no manejan nada.
Son como eventos que se pueden disparar y almacenar en el historial de Redux.

Las acciones que almacena el historial de Redux son objetos.

Wes Bos las compara con los eventos de los elementos en el navegador: hover,
click, out... son cosas que pasan pero no generan ningún cambio si no hay algo
lógico que las use. 👉👉👉 Para eso están los reducers.
*/

// Acción para incrementar los likes en una foto
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// Acción para añadir un comentario a una foto
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
// Acción para remover un comentario de una foto
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}
