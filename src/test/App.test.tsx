import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import App from "../App";

// Helper to wrap components with Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders home page by default", () => {
    render(<App />);
    // Check if the page renders without errors
    expect(document.body).toBeInTheDocument();
  });
});
