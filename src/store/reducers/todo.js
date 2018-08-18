import {
  getTodos,
  postTodos
} from '../type';

export default function(state={}, action){
  switch (action.type) {
    case postTodos:
    return{
      ...state, Todo:action.payload
    }

    default:
      return state;
  }
}