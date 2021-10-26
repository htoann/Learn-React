import React, { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "Node",
  },
  {
    id: 3,
    name: "Native",
  },
];

function App() {
  const [lessonId, setLessonId] = useState(1);
  const [lessonName, setLessonName] = useState("");

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div className="App" style={{ margin: 100 }}>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "red" : "#333" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>

      <h1>Hello</h1>
    </div>
  );
}

export default App;
