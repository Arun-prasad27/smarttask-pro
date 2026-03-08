import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskForm from "../components/Taskform";
import TaskList from "../components/Tasklist";
import { getTasks, addTask, deleteTask, updateTask } from "../services/api";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [priority, setPriority] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.status === "completed";
    if (filter === "pending") return task.status === "pending";
    return true;
  });

  //handle API request
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await getTasks();
        setTasks(response.data);
      } catch (err) {
        setError("Failed to fetch tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  //create and update task
  const handleSubmit = async () => {
    try {
      if (!title.trim() || !priority) return; // basic validation
      setSubmitting(true);

      if (editingId) {
        // UPDATE FLOW

        const existingTask = tasks.find((task) => task.id === editingId);

        const updatedTask = {
          ...existingTask,
          title,
          priority,
        };

        await updateTask(editingId, updatedTask);

        setTasks((prev) =>
          prev.map((task) => (task.id === editingId ? updatedTask : task)),
        );

        setEditingId(null);
      } else {
        // CREATE FLOW

        const newTask = {
          title,
          priority,
          status: "pending",
        };

        const response = await addTask(newTask);

        setTasks((prev) => [...prev, response.data]);
      }

      // Reset form state
      setTitle("");
      setPriority("");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  //delete task
  const handleDeleteTask = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;
    try {
      await deleteTask(id);

      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      setError("Failed to delete task");
    }
  };

  //handle status
  const handleToggleStatus = async (id) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === id);

      const updatedTask = {
        ...taskToUpdate,
        status: taskToUpdate.status === "pending" ? "completed" : "pending",
      };

      await updateTask(id, updatedTask);

      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updatedTask : task)),
      );
    } catch (err) {
      setError("Failed to update status");
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <Link to="/dashboard">
          <button>← Back to Dashboard</button>
        </Link>
      </div>
      <TaskForm
        title={title}
        priority={priority}
        editingId={editingId}
        setTitle={setTitle}
        setPriority={setPriority}
        onSubmit={handleSubmit}
        submitting={submitting}
      />
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        onEdit={(task) => {
          setEditingId(task.id);
          setTitle(task.title);
          setPriority(task.priority);
        }}
        onDelete={handleDeleteTask}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
};

export default TasksPage;
