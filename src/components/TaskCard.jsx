/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/task/${task.id}`);
      }}
      className="my-2 bg-slate-900 p-3 hover:cursor-pointer hover:bg-slate-500"
    >
      <div className="font-bold bg-slate-950 text-center px-3">
        <p className="text-2xl uppercase ">{task.title}</p>
      </div>
      <div className="bg-white text-black px-3">
        <p className="text-xl">{task.description}</p>
      </div>
    </div>
  );
}

export default TaskCard;
