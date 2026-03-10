const KanbanColumn = ({ title, tasks }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 min-h-[300px] shadow-sm">

      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        {title}
      </h3>

      {tasks.length === 0 ? (
        <p className="text-gray-400 text-sm">No tasks</p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-3 rounded-md shadow hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">
                {task.title}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Priority: {task.priority}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default KanbanColumn;