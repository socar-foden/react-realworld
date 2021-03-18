import { render, screen } from "@testing-library/react";
import React from "react";
import AccountProfile from "./AccountProfile";

describe("[AccountProfile]", () => {
  beforeEach(() => {
    render(<AccountProfile />);
  });

  describe("UI 테스트", () => {
    it("구성요소 테스트", () => {
      expect(screen.getByRole("figure", { name: "image" })).toBeInTheDocument();
      expect(
        screen.getByRole("figure", { name: "username" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("figure", { name: "article-count" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("figure", { name: "feed-count" })
      ).toBeInTheDocument();
    });
  });
});
