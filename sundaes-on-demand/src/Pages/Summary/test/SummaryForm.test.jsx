import { waitForElementToBeRemoved, render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('initial conditions for summary form', () => {
  render(<SummaryForm />);
  const button = screen.getByRole('button', { name: /Confirm order/i }); // getByRole
  const checkbox = screen.getByRole('checkbox',{
    name: /I agree to terms and conditions/i
  });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();

  userEvent.click(checkbox);
  
  expect(button).toBeEnabled();

  userEvent.click(checkbox);

  expect(button).toBeDisabled();


});

test('pop over responds to hover', async () => {
  // pop over is hidden on load

  render(<SummaryForm />);

  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);
  
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() => screen.queryAllByText(/no ice cream will actually be delivered/i));
  // expect(nullPopoverAgain).not.toBeInTheDocument();
});