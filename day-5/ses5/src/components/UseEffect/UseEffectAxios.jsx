import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const UseEffectAxios = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <div className="container">
        <ul>
          {post.map((a, i) => (
            <li key={i}>{a.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseEffectAxios;
