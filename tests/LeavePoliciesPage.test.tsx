import React from "react";
import { render, screen } from "@testing-library/react";
import { LeavePoliciesPage } from "../src/pages/LeavePoliciesPage";
import LeavePoliciesList from "../src/components/policies/LeavePoliciesList";

// Mock LeavePoliciesList to simplify testing
jest.mock("../src/components/policies/LeavePoliciesList", () => ({
  __esModule: true,
  default: () => <div data-testid="leave-policies-list">Leave Policies List</div>,
}));

// Mock MainLayout to render children only
jest.mock("../src/components/layout/MainLayout", () => ({
  __esModule: true,
  MainLayout: ({ children }: any) => <div data-testid="main-layout">{children}</div>,
}));

describe("LeavePoliciesPage", () => {
  test("renders MainLayout and LeavePoliciesList", () => {
    render(<LeavePoliciesPage />);

    // Check MainLayout renders
    const layout = screen.getByTestId("main-layout");
    expect(layout).toBeInTheDocument();

    // Check LeavePoliciesList renders inside
    const list = screen.getByTestId("leave-policies-list");
    expect(list).toBeInTheDocument();
    expect(list).toHaveTextContent("Leave Policies List");
  });
});
