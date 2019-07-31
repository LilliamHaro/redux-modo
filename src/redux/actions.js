import { ADD_TO_BUYCAR,CHANGE_MODO } from './actionTypes';

export function addToBuycar(payload){
  return {type: ADD_TO_BUYCAR, payload}
}

export function changeModo(payload){
  return {type: CHANGE_MODO, payload}
}