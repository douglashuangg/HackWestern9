import React, { useState } from "react";

function Timeline() {
  const [data, setData] = useState({});
  function updatePost(event) {
    setData({ post: event.target.value });
  }

  function savePost() {
    fetch("/yourtimeline", {
      method: "POST", // or 'PUT',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // const requestOptions = {
    //   method: "POST",
    //   mode: "cors",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title: "React POST Request Example" }),
    // };
    // fetch("/yourtimeline", requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ postId: data.id }));
  }

  return (
    <div style={{ width: "120rem" }}>
      <h1>Your Timeline</h1>
      <label>Insight: </label>
      <textarea
        placeholder="What did you learn?"
        onChange={updatePost}
      ></textarea>
      <button onClick={savePost}>Save</button>
      <p>{data.post}</p>
    </div>
  );
}

export default Timeline;
