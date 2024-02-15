"use client";

import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const DeleteUser = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      setMessage("Please enter the user's ID.");
      return;
    }

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage("User successfully deleted.");
        clearForm();
      } else {
        const data = await response.json();
        setMessage(
          data.result || "Something went wrong while deleting the user."
        );
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  const clearForm = () => {
    setId("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="User ID"
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Button className="mt-2" type="submit">
          Delete User
        </Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteUser;
