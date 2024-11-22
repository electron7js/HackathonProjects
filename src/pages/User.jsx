import React, { useState,useEffect } from "react";
import "./user.css";
import axios from "axios";
const Profile = () => {
  // Fake user data
  const fakeUser = {
    username: "john_doe",
    email: "johndoe@example.com",
    name: " ",
    address: "123 Elm Street, Springfield",
    phone_no: "",
    avatar: "/ag.png",
  };

  
  var userId = localStorage.getItem("id");

  console.log("asdas")
  console.log(localStorage.get)
  if (userId==null){
    userId =1;
  }

  console.log(userId)
  // States to handle updates
  const [user, setUser] = useState(fakeUser);
  const [name, setName] = useState(user.name || "");
  const [address, setAddress] = useState(user.address || "");
  const [phone_no, setPhone_no] = useState(user.phone_no || "");

  const handleNameChange = (event) => setName(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handlePhoneChange = (event) => setPhone_no(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser((prev) => ({ ...prev, name }));
    alert("Name updated successfully!");
  };

  const handleAddressSubmit = (event) => {
    event.preventDefault();
    setUser((prev) => ({ ...prev, address }));
    alert("Address updated successfully!");
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    setUser((prev) => ({ ...prev, phone_no }));
    alert("Phone number updated successfully!");
  };
  useEffect(() => {
    const fetchUserData = async () => {
      const baseUrl = "http://192.168.137.1:5000"
      try {
        const response = await axios.get(baseUrl+`/getUserData/${userId}`);
        setUser(response.data);
        console.log(response.data)
      } catch (err) {
        setError(err.response ? err.response.data.error : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);


  return (
    <div>
      {user && (
        <div className="wrapper">
          <div className="left">
            <img src='/ag.png' alt="Profile" width="150" />
            <h4>@{user.username}</h4>
          </div>
          <div className="right">
            <div className="info">
              <h3>Information</h3>
              <div className="info_data">
                <div className="data">
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
                <div className="data">
                  {user.phone_no ? (
                    <div>
                      <h4>Phone</h4>
                      <p>{user.phone_no}</p>
                    </div>
                  ) : (
                    <form onSubmit={handlePhoneSubmit}>
                      <label>
                        <h4>Phone Number</h4>
                        <input
                          type="number"
                          value={phone_no}
                          onChange={handlePhoneChange}
                          required
                        />
                      </label>
                      <button type="submit">Save</button>
                    </form>
                  )}
                </div>
              </div>
            </div>
            <div className="projects">
              <div className="projects_data">
                <div className="data">
                  {user.name ? (
                    <div>
                      <h4>Name</h4>
                      <p>{user.name}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <label>
                        <h4>Name:</h4>
                        <input
                          type="text"
                          value={name}
                          onChange={handleNameChange}
                          required
                        />
                      </label>
                      <button type="submit">Save</button>
                    </form>
                  )}
                </div>
                <div className="data">
                  {user.address ? (
                    <div>
                      <h4>Address</h4>
                      <p>{user.address}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleAddressSubmit}>
                      <label>
                        <h4>Address:</h4>
                        <input
                          type="text"
                          value={address}
                          onChange={handleAddressChange}
                          required
                        />
                      </label>
                      <button type="submit">Save</button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
