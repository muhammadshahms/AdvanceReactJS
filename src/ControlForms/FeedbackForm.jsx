import React, { useState } from "react";

const FeedbackForm = () => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    if(score>=5 && comment !== ""){
        e.preventDefault(e);
        alert('Form submitted')
      setScore("10");
      setComment("");
      console.log(`Thanks for giving ${score} score :)`);
    }
    else{
        alert('Form not submitted')
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="score">Score</label>
      <input
        type="range"
        id="Score"
        min="0"
        max="10"
        value={score}
        onChange={e => setScore(e.target.value)}
      />

      <div>
        <label htmlFor="comment"></label>
        <textarea
          name=""
          id="comment"
          cols="30"
          rows="10"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <input disabled={!comment} type="submit" />
    </form>
  );
};

export default FeedbackForm;
