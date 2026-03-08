import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/");
  };
  return (
    <nav
      style={{
        padding: "12px",
        background: "#222",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3>Task Dashboard</h3>

      <div>
        <Link to="/tasks">
          <button style={{ marginRight: "8px" }}>Tasks</button>
        </Link>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
