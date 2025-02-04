import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { addUser } from "./userSlice";

const AddUserForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      const newUser = { id: Date.now(), name, email };
      dispatch(addUser(newUser));
      setName("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
