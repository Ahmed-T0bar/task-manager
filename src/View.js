import Task from "./Task";

const View = ({ tasks }) => {
  return (
    <section className="view">
      <h2>{tasks.length === 0 ? "No tasks" : "All Tasks"}</h2>
      <div className="tasks">
        {tasks.map((singleTask) => {
          return <Task key={singleTask.id} singleTask={singleTask} />;
        })}
      </div>
    </section>
  );
};

export default View;
