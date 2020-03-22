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
} from "./types";

import {
  getStorageTodos,
  getCompletedStorageTodos,
  addStorageTodo,
  addCompletedStorageTodo,
  get_EditStorageTodo,
  get_EditCompletedStorageTodo,
  updateStorageTodo,
  updateCompletedStorageTodo,
  deleteStorageTodo,
  deleteCompletedStorageTodo
} from "./todoStorageAction";

import {
  sortDown,
  sortDefault,
  sortUp,
  completedSortDown,
  completedSortDefault,
  completedSortUp
} from "./todoSort";

export const getTodos = () => async dispatch => {
  dispatch({
    type: GET_TODOS,
    payload: getStorageTodos()
  });
};

export const getTodosSortDown = () => async dispatch => {
  dispatch({
    type: GET_TODOS_SORT_DOWN,
    payload: sortDown()
  });
};

export const getTodosSortDefault = () => async dispatch => {
  dispatch({
    type: GET_TODOS_SORT_DEFAULT,
    payload: sortDefault()
  });
};

export const getTodosSortUp = () => async dispatch => {
  dispatch({
    type: GET_TODOS_SORT_UP,
    payload: sortUp()
  });
};

export const getCompletedTodos = () => dispatch => {
  dispatch({
    type: GET_COMPLETED_TODOS,
    payload: getCompletedStorageTodos()
  });
};

export const getCompletedTodosSortDown = () => async dispatch => {
  dispatch({
    type: GET_COMPLETED_TODOS_SORT_DOWN,
    payload: completedSortDown()
  });
};

export const getCompletedTodosSortDefault = () => async dispatch => {
  dispatch({
    type: GET_COMPLETED_TODOS_SORT_DEFAULT,
    payload: completedSortDefault()
  });
};

export const getCompletedTodosSortUp = () => async dispatch => {
  dispatch({
    type: GET_COMPLETED_TODOS_SORT_UP,
    payload: completedSortUp()
  });
};

export const get_EditTodo = site_ID => async dispatch => {
  dispatch({
    type: GET_EDIT_TODO,
    payload: get_EditStorageTodo(site_ID)
  });
};

export const get_EditCompletedTodo = site_ID => dispatch => {
  dispatch({
    type: GET_EDIT_COMPLETED_TODO,
    payload: get_EditCompletedStorageTodo(site_ID)
  });
};

export const addTodo = newTask => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: addStorageTodo(newTask)
  });
};

export const addSearchTodo = newTask => dispatch => {
  dispatch({
    type: ADD_SEARCH_TODO,
    payload: newTask
  });
};

export const addCompletedTodo = newTask => dispatch => {
  dispatch({
    type: ADD_COMPLETED_TODO,
    payload: addCompletedStorageTodo(newTask)
  });
};

export const updateTodo = newTask => dispatch => {
  dispatch({
    type: UPDATE_TODO,
    payload: updateStorageTodo(newTask)
  });
};

export const updateCompletedTodo = newTask => dispatch => {
  dispatch({
    type: UPDATE_COMPLETED_TODO,
    payload: updateCompletedStorageTodo(newTask)
  });
};

export const deleteTodo = id => dispatch => {
  dispatch({
    type: DELETE_TODO,
    payload: deleteStorageTodo(id)
  });
};

export const deleteCompletedTodo = id => dispatch => {
  dispatch({
    type: DELETE_COMPLETED_TODO,
    payload: deleteCompletedStorageTodo(id)
  });
};
