import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import AddUserForm from "./AddUserForm";
import UserList from "./UserList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>CRUD with Redux, React, and TypeScript</h1>
        <AddUserForm />
        <UserList />
      </div>
    </Provider>
  );
};

export default App;
