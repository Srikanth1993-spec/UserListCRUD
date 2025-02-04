import userReducer, { addUser, updateUser, deleteUser } from "./userSlice";

describe("userSlice", () => {
  const initialState = { users: [] };

  it("should add a user", () => {
    const newUser = { id: 1, name: "Srikanth", email: "Srikanth@test.com" };
    const state = userReducer(initialState, addUser(newUser));
    expect(state.users).toHaveLength(1);
    expect(state.users[0]).toEqual(newUser);
  });

  it("should update a user", () => {
    const existingUser = {
      id: 1,
      name: "Srikanth",
      email: "Srikanth@test.com",
    };
    const updatedUser = {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
    };
    const state = userReducer(
      { users: [existingUser] },
      updateUser(updatedUser)
    );
    expect(state.users[0]).toEqual(updatedUser);
  });

  it("should delete a user", () => {
    const existingUser = {
      id: 1,
      name: "Srikanth",
      email: "Srikanth@test.com",
    };
    const state = userReducer({ users: [existingUser] }, deleteUser(1));
    expect(state.users).toHaveLength(0);
  });
});
