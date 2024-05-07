import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // Added import
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here
test("checkbox appears as checked when user clicks it", () => {
    render(<App />);
  
    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  
    userEvent.click(addPepperoni);
    expect(addPepperoni).toBeChecked();
  });