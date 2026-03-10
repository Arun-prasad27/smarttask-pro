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
    <div className="bg-white shadow-md rounded-lg p-5 mb-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        {editingId ? "Update Task" : "Add New Task"}
      </h2>

      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button
          onClick={onSubmit}
          disabled={!title.trim() || !priority || submitting}
          className={`px-4 py-2 rounded-md text-white font-medium transition
          ${
            submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {submitting
            ? "Processing..."
            : editingId
              ? "Update Task"
              : "Add Task"}
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
