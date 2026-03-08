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
    <div>
      <Navbar />
      <KanbanBoard tasks={tasks} />
    </div>
  );
};

export default Dashboard;