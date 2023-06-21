import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [articles, setArticles] = useState<{ title: string; body: string }[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.posts);
      })
      .catch((error) => {
        console.error("Error:", error);
        document.body.innerHTML = error;
      });
  };

  const generateAllArticles = () => {
    return articles.map((article) => {
      const { title, body } = article;
      return (
        <div
          key={title}
          className="row"
          style={{ marginBottom: "30px", border: "solid 2px black" }}
        >
          <div className="col">
            <h2 className="fw-bold">{title}</h2>
            <div style={{ width: "70%" }}>{body}</div>
            <button className="btn btn-primary" style={{ padding: "10px 20px" }}>
              Like
            </button>
            <img
              style={{
                maxWidth: "5%",
                height: "auto",
                marginLeft: "70%",
                marginBottom: "5%",
              }}
              src="https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png"
              alt="Article Image"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      {generateAllArticles()}
    </div>
  );
};

export default App;
