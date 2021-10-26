import React, { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function App() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [backtoTop, setBacktoTop] = useState(false);

  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((post) => {
        setPosts(post);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setBacktoTop(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup Function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App" style={{ margin: 100 }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={
            type === tab
              ? {
                  backgroundColor: "red",
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}
      {posts.map((post) => (
        <li key={post.id}>{post.title || post.name}</li>
      ))}

      {backtoTop && (
        <button
          style={{ position: "fixed", right: 20, bottom: 20 }}
          onClick={scrollToTop}
        >
          Back To Top
        </button>
      )}
    </div>
  );
}

export default App;
