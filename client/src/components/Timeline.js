import React, { useState } from "react";

function Timeline() {
  const [data, setData] = useState({});
  const [goal, setGoal] = useState({});
  const [receivedPosts, setReceivedPosts] = useState([]);

  function updatePost(event) {
    setData(event.target.value);
  }
  function updateGoal(event) {
    setGoal(event.target.value);
  }

  function getAllUserPosts() {
    fetch("/GetAllUserPosts")
      .then((res) => res.json())
      .then((data) => {
        setReceivedPosts((prevState) => [...prevState, data.message]);
        console.log(data);
      });
  }

  function savePost() {
    const allData = [{ posts: data, goal: goal }];
    console.log(allData);
    fetch("/yourtimeline", {
      method: "POST", // or 'PUT',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        getAllUserPosts();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div style={{ width: "120rem" }}>
      <h1>Your Timeline</h1>
      <label>Insight: </label>
      <textarea
        placeholder="What did you learn?"
        onChange={updatePost}
      ></textarea>
      <label>Goal</label>
      <textarea
        placeholder="What goal is this under (should be select options)"
        onChange={updateGoal}
      ></textarea>
      <button onClick={savePost}>Save</button>
      <p>{data.post}</p>
      <p>{goal.goal}</p>
      {receivedPosts.map((item) => (
        <>
          <h1>{item.posts}</h1>
          <h2>{item.goal}</h2>
        </>
      ))}
    </div>
  );
}

export default Timeline;
