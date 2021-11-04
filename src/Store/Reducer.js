import { ADD_TODO, SET_TODO_INPUT } from "./constants";

export const initState = {
  todos: [
    {
      title: "Learn React",
      id: 1,
    },
    {
      title: "Playing Fifa Online 4",
      id: 2,
    },
  ],
  todoInput: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
      };
    default: {
      throw new Error("Error");
    }
  }
}
