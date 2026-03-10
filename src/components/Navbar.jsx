import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">

      <h1 className="text-xl font-semibold">
        SmartTask Dashboard
      </h1>

      <div className="flex items-center gap-4">

        <p className="text-gray-300 text-sm">
          Welcome, {user?.name || "user"} 👋
        </p>

        <Link to="/tasks">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
            Tasks
          </button>
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

    </nav>
  );
};

export default Navbar;