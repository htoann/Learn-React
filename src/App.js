import React, { useReducer, useRef } from "react";

const initState = {
  todo: "",
  todos: [
    {
      title: "Code",
      id: 1,
    },
    {
      title: "Learn React",
      id: 2,
    },
    {
      title: "Playing Guitar",
      id: 3,
    },
  ],
};

const SET_TODO = "set_job";
const ADD_TODO = "add_job";
const DELETE_TODO = "delete_job";

const setTodo = (todo) => {
  return {
    type: SET_TODO,
    todo,
  };
};

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todo: action.todo,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.todo,
            id: Math.random().toString(),
          },
        ],
      };
    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload - 1, 1);
      return {
        ...state,
        todos: newTodos,
      };
    default:
      throw new Error("Error");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { todo, todos } = state;

  const inputRef = useRef();

  return (
    <div className="App" style={{ margin: 100 }}>
      <h2>Todo</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => dispatch(setTodo(e.target.value))}
        value={todo}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          dispatch(addTodo(todo));
          dispatch(setTodo(""));
          inputRef.current.focus();
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ marginTop: "20px" }}
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
