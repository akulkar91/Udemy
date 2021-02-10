import { userEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("checking initial conditions for checkbox", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: /Confirm order/i });
  const checkbox = screen.getByRole("checkbox", {
    name: /I agree to Terms and Conditions/i,
  });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();

  //   userEvent.click(checkbox);

  //   expect(button).toBeEnabled();

  //   userEvent.click(checkbox).toBeDisabled();
});

test("Checkbox enables the button and disables on second click", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: /Confirm order/i });
  const checkbox = screen.getByRole("checkbox", {
    name: /I agree to Terms and Conditions/i,
  });

  // expect(checkbox).not.toBeChecked();
  // expect(button).toBeDisabled();

  userEvent.click(checkbox);

  expect(button).toBeEnabled();

  userEvent.click(checkbox);

  expect(button).toBeDisabled();
});
