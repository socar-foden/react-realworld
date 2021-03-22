import React from "react";
import { render, screen } from "@testing-library/react";
import AccountForm from "./AccountForm";

describe("[AccountForm]", () => {
  beforeEach(() => {
    render(<AccountForm />);
  });

  describe("UI 테스트", () => {
    it("폼 구성요소 테스트", () => {
      expect(screen.getByRole("input", { name: "e-mail" })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "submit" })
      ).toBeInTheDocument();
    });
  });
});
