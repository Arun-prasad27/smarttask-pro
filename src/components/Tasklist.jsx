const TaskList = ({ tasks, onEdit, onDelete, onToggleStatus }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-6">
        <p className="text-lg">No tasks available</p>
        <small>Add your first task above</small>
      </div>
    );
  }

  return (
    <ul className="space-y-3 mt-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="bg-white shadow-sm rounded-md p-4 flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <span
              className={`font-medium ${
                task.status === "completed"
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
            >
              {task.title}
            </span>

            <span
              className={`text-sm font-semibold px-2 py-1 rounded
                ${
                  task.priority === "High"
                    ? "bg-red-100 text-red-600"
                    : task.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                }`}
            >
              {task.priority}
            </span>
          </div>

          <div className="flex gap-2 mt-3 md:mt-0">
            <button
              onClick={() => onToggleStatus(task.id)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              {task.status === "pending" && "Start Task"}
              {task.status === "in-progress" && "Complete Task"}
              {task.status === "completed" && "Reset Task"}
            </button>

            <button
              onClick={() => onEdit(task)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(task.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
