import React, { useState } from "react";
import Collect from "./Collect";
import View from "./View";
import {BiHeartCircle}from 'react-icons/bi'

const App = () => {
  const [task, setTask] = useState({ task: "", date: "", description: "" });
  const [tasks, setTasks] = useState([]);

  return (
    <main className="task-manager">
      <h1>Task Manager</h1>
      <Collect
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <View task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} />
      <footer>
        The only purpose of this application is to learn React
        <br/>
        Made with <BiHeartCircle/> by Ahmed tobar
      </footer>
    </main>
  );
};

export default App;
