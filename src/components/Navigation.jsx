// This is a navigation of the app

import { Link } from "react-router-dom"; // Link don't reload page

function Navigation() {
  return (
    <div className="bg-slate-900 flex justify-between px-20 py-4 text-2xl">
      <Link to={"/"} className="hover:bg-slate-400 p-3 rounded">
        <h1>Task App</h1>
      </Link>
      <Link to={"/task-create"} className="hover:bg-slate-400 p-3 rounded">
        Create task
      </Link>
    </div>
  );
}

export default Navigation;
