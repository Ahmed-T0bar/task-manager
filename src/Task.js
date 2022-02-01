import React, { useState } from "react";
const Task = ({ singleTask }) => {
  const [readMore, setReadMore] = useState(false);
  const { task, date, description } = singleTask;

  return (
    <div className="task">
      <h3>{task}</h3>
      <p>{date}</p>
      <p>
        {readMore ? description : `${description.substring(0, 50)}...`}
        <button className="read-more" onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "show more"}
        </button>
      </p>
    </div>
  );
};

export default Task;
