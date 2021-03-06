import { render, screen } from "@testing-library/react";
import React from "react";
import Layout from "./Layout";

describe("[Layout]", () => {
  beforeEach(() => {
    render(<Layout />);
  });

  describe("UI 테스트", () => {
    it("헤더가 존재한다.", () => {
      expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("사이드 메뉴가 존재한다.", () => {
      expect(screen.getByRole("navigation", { name: "side-nav" })).toBeInTheDocument();
    });
  });
});
