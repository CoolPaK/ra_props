import { ITasks } from "./models";
import "./SelectTask.css";

function SelectTask(props: ITasks) {
  const { tasks, curTask, setTask } = props;

  const handler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    setTask(target.textContent || "");
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <button
          className={`task${task.taskName === curTask ? " active" : ""}`}
          onClick={handler}
          key={task.taskName}
        >
          {task.taskName}
        </button>
      ))}
    </div>
  );
}

export default SelectTask;