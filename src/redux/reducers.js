import { ADD_TO_BUYCAR, CHANGE_MODO} from './actionTypes';

const initialState = {
  buyCar:[{name:'ffgf'}],
  modo:"dia",
  modoTitle:"MODO DIA"
}

function rootReducer(state=initialState, action) {
  if(action.type === ADD_TO_BUYCAR ) {
    return  Object.assign({},state,{
      buyCar: state.buyCar.concat(action.payload)
    })
  }

  if(action.type === CHANGE_MODO ) {
    return  Object.assign({},state,{
      modo: state.modo === 'dia' ? state.modo = 'noche' : state.modo = 'dia',
      modoTitle: state.modo === 'dia' ? state.modoTitle = 'MODO DIA' : state.modoTitle = 'MODO NOCHE'
    })
  }
  return state

}

export default rootReducer