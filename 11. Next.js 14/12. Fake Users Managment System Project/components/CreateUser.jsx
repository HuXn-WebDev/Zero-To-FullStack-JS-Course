"use client";

import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const CreateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id || !name || !email || !password) {
      alert("Please fill all the input fields");
      return;
    }

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, email, password }),
      });

      if (response.ok) {
        alert("User successfully created.");
      } else {
        alert("Something went wrong :(");
        return;
      }
    } catch (error) {
      alert(error);
      return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="ID"
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          label="Name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="mt-2" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateUser;
