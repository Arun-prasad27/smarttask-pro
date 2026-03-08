import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:3001/users", {
        params: {
          email: email.trim(),
        },
      });
      console.log(res.data);
      /*console.log("Email:", email);
      console.log("Password:", password);*/

      if (res.data.length > 0 && res.data[0].password === password.trim()) {
        localStorage.setItem("user", JSON.stringify(res.data[0]));
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
