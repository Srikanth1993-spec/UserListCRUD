import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { deleteUser, updateUser } from "./userSlice";

const UserList: React.FC = () => {
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (user: { id: number; name: string; email: string }) => {
    const updatedUser = { ...user, name: `${user.name} - Updated` };
    dispatch(updateUser(updatedUser));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} - {user.email}
            </span>
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
