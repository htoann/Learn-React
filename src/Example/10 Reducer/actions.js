import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_TODO_INPUT } from "./constants";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});
