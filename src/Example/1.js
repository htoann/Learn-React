import React, { useState } from "react";

const todolist = [
  { id: 1, name: "Sleep" },
  { id: 2, name: "Code" },
  { id: 3, name: "Eat" },
];

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const storageTodo = JSON.parse(localStorage.getItem("todos"));

    return storageTodo ?? [];
  });
  // const [completed, setCompleted] = useState("unchecked");

  const handleAdd = () => {
    if (todo !== "") {
      setTodos((prev) => {
        const jsonTodo = JSON.stringify([...prev, todo]);

        localStorage.setItem("todos", jsonTodo);

        return [...prev, todo];
      });
      setTodo("");
    }
  };

  const handleCheck = (todo) => {
    setTodos(todos.splice(todo.index, 1));
    console.log(todo);
  };

  return (
    <div className="App" style={{ margin: 100 }}>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo, key) => (
          <div key={key} onClick={() => handleCheck(todo)}>
            <input type="checkbox" />
            <label>{todo}</label>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
