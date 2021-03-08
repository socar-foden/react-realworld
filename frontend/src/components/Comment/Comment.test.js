import { render, screen } from "@testing-library/react";
import React from "react";
import Comment from "./Comment";

describe("[Comment]", () => {
  beforeEach(() => {
    render(<Comment />);
  });

  describe("UI 테스트", () => {
    it("구성요소 테스트", () => {
      expect(screen.getByRole("figure", { name: "image" })).toBeInTheDocument();
      expect(screen.getByRole("figure", { name: "username" })).toBeInTheDocument();
      expect(screen.getByRole("figure", { name: "created-at" })).toBeInTheDocument();
      expect(screen.getByRole("figure", { name: "body" })).toBeInTheDocument();
    });
  });
});
