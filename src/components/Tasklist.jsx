const TaskList = ({ tasks, onEdit, onDelete, onToggleStatus }) => {
  if (tasks.length === 0) {
    return (
      <div>
        <p>No tasks available</p>
        <small>Add your first task above</small>
      </div>
    );
  }
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: "10px" }}>
          <span
            style={{
              textDecoration:
                task.status === "completed" ? "line-through" : "none",
              marginRight: "10px",
            }}
          >
            {task.title}
          </span>

          <strong>{task.priority}</strong>

          <button
            onClick={() => onToggleStatus(task.id)}
            style={{ marginLeft: "10px" }}
          >
            {task.status === "pending" ? "Mark Complete" : "Mark Pending"}
          </button>

          <button onClick={() => onEdit(task)} style={{ marginLeft: "5px" }}>
            Edit
          </button>

          <button
            onClick={() => onDelete(task.id)}
            style={{ marginLeft: "5px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
