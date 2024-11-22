import { useState } from "react";
import { Link , redirect,useNavigate} from "react-router-dom";
import Register from "./Register";
import axios from "axios";

import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();


  const submissionHandler = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission
  
    // Validation
    if (!formData.password) {
      alert("Password cannot be empty");
      return;
    }
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (formData.email.length < 5 || formData.email.length > 64) {
      alert("Username must be between 5 and 64 characters.");
      return;
    }
  
    try {
      // Axios POST request
      const baseUrl="http://192.168.137.1:5000";

      const response = await axios.post(baseUrl+"/login", formData, {
        headers: { "Content-Type": "application/json" },
      });
  
      // Handle success response
      console.log(response);
      localStorage.setItem("id",response.data.user_id);

      localStorage.setItem("name",response.data.name);
      navigate("/profile")

      alert(`Welcome, ${response.data.name}!`);
    } catch (err) {
      // Handle error response
      console.error("Login Error:", err.response?.data || err.message);
      alert(
        err.response?.data?.error || "An error occurred during login. Please try again."
      );
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="login">
    <div className="main-content">
      <h1>User Login</h1>
      <form
        id="form"
        className="main-form"
        method="GET"
        action="./"
        onSubmit={submissionHandler}
      >
        <div className="form-group">
          <span>
          <label className="input-label">Username: </label>
          <input
            type="text"
            name="email"
            className="input-box"
            value={formData.email}
            onChange={handleInputChange}
          />
          </span>
          <span>
          <label className="input-label">Password: </label>
          <input
            type="password"
            name="password"
            className="input-box"
            value={formData.password}
            onChange={handleInputChange}
          />
        </span>
        <div className="button_div" >          
          <div>
            {" "}
            <input
              type="submit"
              id="submitbtn"
              name="submitbtn"
              className="submit-btn"
              value={"Login"}
            ></input>
          </div>
        </div>
        </div>

      </form>
      <Link to="/register" className="link">
        Don't have an account? Register here!
      </Link>
    </div>
    </section>
  );
}

export default Login;
