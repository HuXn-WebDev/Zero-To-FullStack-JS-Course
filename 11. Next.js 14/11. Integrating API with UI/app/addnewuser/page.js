"use client";

import { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    console.log(name, age, email);
    let response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });

    response = await response.json();

    if (response.ok) {
      alert("User Successfully Created");
    } else {
      alert("An Error Occured While Creating The User.");
    }

    console.log(response);
  };

  return (
    <div>
      <h1>Add New User</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Enter Name"
      />
      <input
        onChange={(e) => setAge(e.target.value)}
        value={age}
        type="number"
        placeholder="Enter Age"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter Email"
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default AddUser;
