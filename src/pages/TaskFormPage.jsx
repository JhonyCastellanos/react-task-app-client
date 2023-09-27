import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // Use to change value of the form label
    setValue,
  } = useForm();

  // Use to navigate for the urls
  const navigate = useNavigate();

  const params = useParams();

  // Execute register POST in the api
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Task updated successfully");
    } else {
      await createTask(data);
      toast.success("Task created successfully");
    }
    navigate("/");
  });

  // Use to show placeholder of the task
  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      }
    }
    loadTask();
  });

  return (
    <div className="text-center my-24 px-20 text-black">
      <form onSubmit={onSubmit} className="grid">
        <input
          type="text"
          placeholder="Title"
          // Extract element and register in hook form
          {...register("title", { required: true })}
          className="bg-white px-3 py-1"
        />
        {/*If element required is not assigned*/}
        {errors.title && (
          <span className="text-red-400 my-2">Title required</span>
        )}
        <textarea
          rows="2"
          placeholder="Description"
          {...register("description", { required: true })}
          className="my-3 bg-white px-3 py-1"
        ></textarea>
        {errors.description && (
          <span className="text-red-400 my-2">Description required</span>
        )}
        <button className="bg-slate-950 text-white">Save</button>
      </form>

      {/* Run if you want to delete task */}
      {params.id && (
        <button
          onClick={async () => {
            // Show window to confirm
            const accepted = window.confirm("Are you sure?");
            if (accepted) {
              // Execute delete and return (/)
              await deleteTask(params.id);
              toast("Task deleted successfully", {
                icon: "🗑️",
              });
              navigate("/");
            }
          }}
          className="bg-red-600 px-4 text-white my-3"
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default TaskFormPage;
