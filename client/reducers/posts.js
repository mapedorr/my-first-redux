/* 
El reducer funciona con dos cosas:
1. Una acción a ejecutar (indica qué pasó).
2. Una copia del estado actual (de los datos) para modificarlos.

El reducer es el que realmente cambia el estado de algo. Es como la lógica que
se agrega a un evento onClick u onMouseEnter...

(!) TODOS los reducers son llamados cuando se dispara una acción.
    Que hagan algo o no como resultado de esa acción es algo que sólo se define
    por la lógica que se ponga dentro de la función que la representa.
*/
function posts(state = [], action) {
  /* Redux usa programación funcional, así que no se modifican los objetos sino
  una copia de los mismos. Eso hace que la función sea pura, que es lo que busca
  la programación funcional.
  
  Por eso se hace una copia del arreglo de posts y se devuelve el post a modificar
  también como una copia. Ni el arreglo ni el objeto originales se tocan. */
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index
      return [
        ...state.slice(0, i), // Copia arreglo antes elemento que se modifica
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // Copia arreglo después elemento que se modifica
      ]
      break
    default:
      return state
      break
  }
}

export default posts