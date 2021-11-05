import { actions, useStore } from "./Store";
import { deleteTodo } from "./Store/actions";
import { useRef } from "react";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();

  const handleAddTodo = (todoInput, id) => {
    todoInput && dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));
    inputRef.current.focus();
  };

  const handleEditTodo = (todo, index) => {
    dispatch(actions.setTodoInput(todo.title));

    todos.splice(index, 1);

    todos.map((todo, indexTodo) => {
      return indexTodo === index ? "todoInput" : todo;
    });
  };

  return (
    <div className="App" style={{ margin: 100 }}>
      <h1>Todo List</h1>
      <input
        ref={inputRef}
        style={{ marginBottom: 20 }}
        type="text"
        placeholder="New todo..."
        value={todoInput}
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button onClick={() => handleAddTodo(todoInput)}>Add Todo</button>
      {todos.map((todo, index) => (
        <div style={{ display: "flex" }} key={index}>
          <li style={{ marginTop: 20 }}>{todo.title}</li>
          <button
            style={{ marginLeft: 10, marginTop: 18, height: 26 }}
            onClick={() => handleEditTodo(todo, index)}
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteTodo(index))}
            style={{ marginLeft: 10, marginTop: 18, height: 26 }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
