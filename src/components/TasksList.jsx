import { useEffect, useState } from "react"; // Load elements with load page
import { getAllTasks } from "../api/tasks.api";
import TaskCard from "./TaskCard";

function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      // Fetching to data to database
      const res = await getAllTasks(); //Get data from database
      setTasks(res.data); // Set data in tasks
    }
    loadTasks();
  }, []);

  // Return tasks with map, agree key obligatory to ident element of the map
  return (
    <div className="my-5 mx-10 grid grid-cols-2 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksList;
