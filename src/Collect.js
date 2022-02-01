import React from "react";
import { MdAddTask } from "react-icons/md";

const Collect = ({ task, setTask, tasks, setTasks }) => {
  // Handle Chanege
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTask({ ...task, [name]: value });
  };

  // Handle Date
  let y = new Date().getFullYear();
  let m = new Date().getMonth();
  let d = new Date().getDate();
  let h = new Date().getHours();
  let mi = new Date().getMinutes();

  let taskTime;
  if (!task.date) {
    taskTime = `${y}-${m}-${d} ${h}:${mi}`;
  } else {
    taskTime = task.date;
  }

  // Handle Submit
  const handelSubmit = (e) => {
    e.preventDefault();
    if (task.task && task.description) {
      const newTask = {
        ...task,
        date: `${taskTime}`,
        id: new Date().getTime().toString(),
      };
      setTasks([...tasks, newTask]);
      setTask({ task: "", date: "", description: "" });
    } else {
      console.log("Error: empty fields");
    }
  };
  return (
    <section className="collect">
      <h2>Enter a task</h2>
      <form>
        <div className="input">
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            name="task"
            value={task.task}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="input">
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={task.date}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="input">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={task.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" onClick={handelSubmit}>
          <MdAddTask />
        </button>
        <div style={{ clear: "both" }}></div>
      </form>
    </section>
  );
};

export default Collect;
