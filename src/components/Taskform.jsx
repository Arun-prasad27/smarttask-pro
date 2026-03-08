const TaskForm = ({
  title,
  priority,
  editingId,
  setTitle,
  setPriority,
  onSubmit,
  submitting,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button
        onClick={onSubmit}
        disabled={!title.trim() || !priority || submitting}
      >
        {submitting ? "Processing..." : editingId ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
};

export default TaskForm;
