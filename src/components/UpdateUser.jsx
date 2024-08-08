import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = ({ user, setUser }) => {

    const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
  });



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application.json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((error) => console.log(error));

      Swal.fire({
        title: "Success!",
        text: "User Deletion successfully",
        icon: "success"
      });

    navigate("/")
  };
  return (
    <div className="update-user-inputs">
      <>
        <h2>Update user </h2>
      </>
      <div>
        <input
          type="text"
          placeholder={user.name}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <>
        <input
          type="text"
          placeholder={user.username}
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </>
      <>
        <button onClick={handleUpdate}>Update</button>
      </>
    </div>
  );
};

export default UpdateUser;
