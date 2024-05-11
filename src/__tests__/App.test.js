import { render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here
// Test the initial state of the page

test("pizza checkbox is initially unchecked", () => {})

test("toppings list initially contains only cheese", () => {})
test("pizza checkbox is initially unchecked", () => {
    render(<App />);
  
    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  
    expect(addPepperoni).not.toBeChecked();
  });
  // Test the initial state of the page
test("toppings list initially contains only cheese", () => {});
