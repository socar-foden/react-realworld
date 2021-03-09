import { render, screen } from "@testing-library/react";
import React from "react";
import ArticleForm from "./ArticleForm";

describe("[ArticleForm]", () => {
  beforeEach(() => {
    render(<ArticleForm />);
  });

  describe("UI 테스트", () => {
    it("폼 구성요소 테스트", () => {
      expect(screen.getByRole("input", { name: "body" })).toBeInTheDocument();
      expect(
        screen.getByRole("input", { name: "description" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("input", { name: "tags" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "submit" })
      ).toBeInTheDocument();
    });
  });
});
