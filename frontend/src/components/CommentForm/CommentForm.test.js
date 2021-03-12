import { render, screen } from "@testing-library/react";
import React from "react";
import CommentForm from "./CommentForm";

describe("[CommentForm]", () => {
  beforeEach(() => {
    render(<CommentForm />);
  });

  describe("UI 테스트", () => {
    it("body input과 submit 버튼이 존재한다.", () => {
      expect(screen.getByRole("input", { name: "body" })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "submit" })
      ).toBeInTheDocument();
    });
  });
});
