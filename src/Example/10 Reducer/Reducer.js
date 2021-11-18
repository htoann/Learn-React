import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_TODO_INPUT } from "./constants";

export const initState = {
  todos: [
    {
      title: "Learn React",
    },
    {
      title: "Playing Fifa Online 4",
    },
    {
      title: "Watching TV",
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
        todos: [
          ...state.todos,
          {
            title: action.payload,
            id: Math.floor(Math.random() * 10000),
          },
        ],
      };
    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);

      return {
        ...state,
        todos: newTodos,
      };
    case EDIT_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    default: {
      throw new Error("Error");
    }
  }
}
