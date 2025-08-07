import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useEffS = () => {
  const [id, setId] = useState(0);
  const [posts, setPosts] = useState({});
  const [btn, setBtn] = useState(0);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const ActionBtn = () => {
    setBtn(id);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button onClick={ActionBtn}>find</button>

      <h1>{posts.title}</h1>
    </div>
  );
};

export default useEffS;
