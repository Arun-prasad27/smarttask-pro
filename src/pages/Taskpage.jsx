import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskForm from "../components/Taskform";
import TaskList from "../components/Tasklist";
import { getTasks, addTask, deleteTask, updateTask } from "../services/api";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]); // main state to hold tasks data
  const [loading, setLoading] = useState(false); // loading state for API calls
  const [error, setError] = useState(null); // error state for API calls
  const [title, setTitle] = useState(""); // form state for task title
  const [editingId, setEditingId] = useState(null); // state to track which task is being edited
  const [priority, setPriority] = useState(""); // form state for task priority
  const [submitting, setSubmitting] = useState(false); // state to track form submission status
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.status === "completed";
    if (filter === "pending") return task.status === "pending";
    return true;
  });

  //handle API request
  useEffect(() => {
    const fetchTasks = async () => { //fetch tasks from backend
      try { 
        setLoading(true); // Start loading
        const response = await getTasks(); // API call to fetch tasks
        setTasks(response.data); // Update state with fetched tasks
      } catch (err) {
        setError("Failed to fetch tasks"); // Set error message if API call fails
      } finally {
        setLoading(false); // End loading regardless of success or failure
      }
    };

    fetchTasks(); // Call the function to fetch tasks when component mounts
  }, []);

  if (loading) { // Show loading spinner while fetching data
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mb-4"></div>

        <p className="text-gray-600 text-sm text-center">Fetching tasks...</p>
      </div>
    );
  }
  if (error) return <p>{error}</p>; // Show error message if there's an error fetching data

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

        const newTask = { // create task object to send to backend
          title,
          priority,
          status: "pending",
        };

        const response = await addTask(newTask); // API call to add task

        setTasks((prev) => [...prev, response.data]); // Update state with new task added to the list
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
      await deleteTask(id); // API call to delete task

      setTasks((prev) => prev.filter((task) => task.id !== id)); // Update state by removing the deleted task from the list
    } catch (err) {
      setError("Failed to delete task");
    }
  };

  //handle status
  const handleToggleStatus = async (id) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === id);

      let newStatus;
      if (taskToUpdate.status === "pending") {
        newStatus = "in-progress";
      } else if (taskToUpdate.status === "in-progress") {
        newStatus = "completed";
      } else {
        newStatus = "pending";
      }

      const updatedTask = {
        ...taskToUpdate,
        status: newStatus,
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/dashboard">
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Dashboard
            </button>
          </Link>
        </div>

        {/* Task Form */}
        <TaskForm
          title={title}
          priority={priority}
          editingId={editingId}
          setTitle={setTitle}
          setPriority={setPriority}
          onSubmit={handleSubmit}
          submitting={submitting}
        />

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1 rounded-md text-sm ${
              filter === "all" ? "bg-blue-600 text-white" : "bg-white border"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-1 rounded-md text-sm ${
              filter === "pending"
                ? "bg-yellow-500 text-white"
                : "bg-white border"
            }`}
          >
            Pending
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-1 rounded-md text-sm ${
              filter === "completed"
                ? "bg-green-600 text-white"
                : "bg-white border"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Task List */}
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
    </div>
  );
};

export default TasksPage;
