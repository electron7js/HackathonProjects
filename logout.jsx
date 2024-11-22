import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear specific keys in localStorage
    localStorage.removeItem("id");
    localStorage.removeItem("name");

    // Redirect to the login page after clearing localStorage
    navigate("/login");
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
