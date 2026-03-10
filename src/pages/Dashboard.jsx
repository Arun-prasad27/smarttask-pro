import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import KanbanBoard from "../components/KanbanBoard";
import { getTasks } from "../services/api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Task Board</h1>

        <KanbanBoard tasks={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;
