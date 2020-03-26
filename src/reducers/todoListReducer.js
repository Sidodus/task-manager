import {
  GET_TODOS,
  GET_COMPLETED_TODOS,
  GET_TODOS_SORT_DOWN,
  GET_TODOS_SORT_DEFAULT,
  GET_TODOS_SORT_UP,
  GET_COMPLETED_TODOS_SORT_DOWN,
  GET_COMPLETED_TODOS_SORT_DEFAULT,
  GET_COMPLETED_TODOS_SORT_UP,
  DELETE_TODO,
  DELETE_COMPLETED_TODO,
  ADD_TODO,
  ADD_SEARCH_TODO,
  ADD_COMPLETED_TODO,
  GET_EDIT_TODO,
  GET_EDIT_COMPLETED_TODO,
  UPDATE_TODO,
  UPDATE_COMPLETED_TODO
} from "../actions/types";

const initialState = {
  todos: [],
  completedTodos: []
};

// while(new Date().toLocaleTimeString().substr(0, 5) === ("11:34")){
//   console.info("Now Now")
// break
//   }

// document.addEventListener("storage", e => console.log(e.key));

// console.log(new Date().toLocaleTimeString().substr(0, 5));

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case GET_COMPLETED_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case GET_TODOS_SORT_DOWN:
      return {
        ...state,
        todos: action.payload
      };
    case GET_TODOS_SORT_DEFAULT:
      return {
        ...state,
        todos: action.payload
      };
    case GET_TODOS_SORT_UP:
      return {
        ...state,
        todos: action.payload
      };
    case GET_COMPLETED_TODOS_SORT_DOWN:
      return {
        ...state,
        todos: action.payload
      };
    case GET_COMPLETED_TODOS_SORT_DEFAULT:
      return {
        ...state,
        todos: action.payload
      };
    case GET_COMPLETED_TODOS_SORT_UP:
      return {
        ...state,
        todos: action.payload
      };
    case GET_EDIT_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case GET_EDIT_COMPLETED_TODO:
      return {
        ...state,
        completedTodos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_SEARCH_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_COMPLETED_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case UPDATE_COMPLETED_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case DELETE_COMPLETED_TODO:
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
}
