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
      expect(screen.getByRole("figure", { name: "body" })).toBeInTheDocument();
      expect(screen.getByRole("figure", { name: "description" })).toBeInTheDocument();
      expect(
        screen.getByRole("figure", { name: "number-of-likes" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "settings" })
      ).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "share" })).toBeInTheDocument();
      expect(screen.getByRole("figure", { name: "tag-list" })).toBeInTheDocument();
      expect(
        screen.getByRole("figure", { name: "comments" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("input", { name: "add-comment" })
      ).toBeInTheDocument();
    });
  });
});
