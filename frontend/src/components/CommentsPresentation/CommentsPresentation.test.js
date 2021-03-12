import { render, screen } from "@testing-library/react";
import React from "react";
import CommentsPresentation from "./CommentsPresentation";

describe("[CommentsPresentation]", () => {
  beforeEach(() => {
    render(<CommentsPresentation open={true} />);
  });

  describe("UI 테스트", () => {
    it("comment-list 영역, comment 폼이 존재한다.", () => {
      expect(
        screen.getByRole("figure", { name: "comment-list" })
      ).toBeInTheDocument();
      expect(screen.getByRole("form", { name: "comment" })).toBeInTheDocument();
    });
  });
});
