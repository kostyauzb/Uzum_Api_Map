import React, { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setPosts(data.products || []);
      console.log(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="container">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <img src={post.images} alt={post.name} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Discount: {post.discountPercentage}%</p>
            <div className="flex">
              <h5>category: "{post.category}"</h5>
              <h4>{post.price}$</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
