import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({ tasks }) => {

  const pending = tasks.filter(task => task.status === "pending");
  const completed = tasks.filter(task => task.status === "completed");
  const progress = tasks.filter(task => task.status === "in-progress");

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "20px",
      }}
    >
      <KanbanColumn title="Pending" tasks={pending} />
      <KanbanColumn title="In Progress" tasks={progress} />
      <KanbanColumn title="Completed" tasks={completed} />
    </div>
  );
};

export default KanbanBoard;