/*
Este componente se usará para hacer que el Main y todos los componentes
hijos tengan acceso a las acciones y los datos. Para no estar pasando todo
por props entre los hijos, Redux tiene un componente llamado "connect", ese es
el que se encarga de hacer que las funciones de las acciones y los datos se
puedan acceder desde cualquier hijo de Main.
*/
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Main from './Main'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

// 'dispatch' es la función que puede verse en $r.store.dispatch
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

// Hay que decir qué componente va a recibir como props los datos (mapStateToProps)
// y las posibles acciones a ejecutar sobre ests (mapDispatchToProps)
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
