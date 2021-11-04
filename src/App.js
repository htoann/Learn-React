import { actions, useStore } from "./Store";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  return (
    <div className="App" style={{ margin: 100 }}>
      <h1>Todo List</h1>
      <input
        style={{ marginBottom: 20 }}
        type="text"
        placeholder="New todo..."
        value={todoInput}
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
}

export default App;
