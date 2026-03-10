import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({ tasks }) => {
  const pending = tasks.filter((task) => task.status === "pending");
  const completed = tasks.filter((task) => task.status === "completed");
  const progress = tasks.filter((task) => task.status === "in-progress");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <KanbanColumn title="Pending" tasks={pending} />

      <KanbanColumn title="In Progress" tasks={progress} />

      <KanbanColumn title="Completed" tasks={completed} />
    </div>
  );
};

export default KanbanBoard;
