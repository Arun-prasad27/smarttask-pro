const KanbanColumn = ({ title, tasks }) => {
  return (
    <div
      style={{
        flex: 1,
        background: "#f4f4f4",
        padding: "10px",
        borderRadius: "6px",
        minHeight: "300px",
      }}
    >
      <h4>{title}</h4>

      {tasks.length === 0 ? (
        <p style={{ color: "gray" }}>No tasks</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              background: "white",
              padding: "8px",
              marginTop: "8px",
              borderRadius: "4px",
            }}
          >
            <p>{task.title}</p>
            <small>{task.priority}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default KanbanColumn;