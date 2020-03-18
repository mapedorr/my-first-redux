/* 
Sólo puede haber un reducer para Redux. Por eso es necesario combinar todos los
que se vayan a utilizar en uno.
*/
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Importar los reducers que usará la aplicación
import posts from './posts'
import comments from './comments'

// Como también queremos almacenar los cambios en la URL (navegación) hay que
// guardar el reducer que se encargará de ello.
const rootReducer = combineReducers({ posts, comments, routing: routerReducer })

export default rootReducer
