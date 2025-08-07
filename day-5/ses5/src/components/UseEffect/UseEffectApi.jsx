import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const UseEffectApi = () => {
  const [id, setId] = useState(0);
  const [post, setPost] = useState({});
  const [btn, setbtn] = useState(0);

  const Actionbtn = () => {
    setId(btn);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
      });
  }, [id]);
  return (
    <div>
      <div className="container">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="formId1"
            id="formId1"
            placeholder=""
            onChange={(e) => setbtn(e.target.value)}
          />
          <button onClick={Actionbtn}>Find</button>
        </div>
      </div>
      <p className="h1">{post.title}</p>
    </div>
  );
};

export default UseEffectApi;
