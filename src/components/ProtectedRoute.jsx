import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => { // Check if user is authenticated
  const user = localStorage.getItem("user") 
  if (!user) { 
    return <Navigate to="/login" />;
  }

  return children; // If authenticated, render the child components (the protected page)
};

export default ProtectedRoute;