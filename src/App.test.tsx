import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

test("adds and removes users", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const nameInput = screen.getByPlaceholderText(/name/i);
  const emailInput = screen.getByPlaceholderText(/email/i);
  const addButton = screen.getAllByText(/add user/i);
  expect(addButton.length).toBeGreaterThan(0);

  fireEvent.change(nameInput, { target: { value: "Srikanth" } });
  fireEvent.change(emailInput, { target: { value: "srikanth@test.com" } });
  fireEvent.click(addButton);

  expect(screen.getByText(/Srikanth - srikanth@test.com/i)).toBeInTheDocument();

  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);

  expect(
    screen.queryByText(/Srikanth - srikanth@test.com/i)
  ).not.toBeInTheDocument();
});
