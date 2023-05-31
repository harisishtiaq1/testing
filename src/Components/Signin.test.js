import { render,screen } from "@testing-library/react";
import SignIn from "./SignIn";

test("username input should be rendered", () => {
  render(<SignIn />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});
test("password should be rendered", () => {
  render(<SignIn />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});
test("button should be rendered", () => {
  render(<SignIn />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeInTheDocument();
});
