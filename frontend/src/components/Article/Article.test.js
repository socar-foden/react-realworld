import { render, screen } from "@testing-library/react";
import React from "react";
import Article from "./Article";

describe("[Article]", () => {
  beforeEach(() => {
    render(<Article />);
  });

  describe("UI 테스트", () => {
    it("구성요소 테스트", () => {
      expect(screen.getByRole("header", { name: "info" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "like" })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "settings" })
      ).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "share" })).toBeInTheDocument();
      expect(screen.getByRole("figure", { name: "tags" })).toBeInTheDocument();
      expect(
        screen.getByRole("figure", { name: "comments" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("input", { name: "add-comment" })
      ).toBeInTheDocument();
    });
  });
});
