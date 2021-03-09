import { fireEvent, render, screen } from "@testing-library/react";
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
      expect(screen.getByRole("input", { name: "tags" })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "submit" })
      ).toBeInTheDocument();
    });
  });

  describe("UX 테스트", () => {
    describe("body 내용이", () => {
      it("없으면 submit 버튼은 비활성화", () => {
        fireEvent.change(screen.getByRole("input", { name: "body" }), {
          target: { value: "" },
        });
        expect(screen.getByRole("button", { name: "submit" })).toBeDisabled();
      });

      it("있으면 submit 버튼은 활성화", () => {
        fireEvent.change(screen.getByRole("input", { name: "body" }), {
          target: { value: "test-body" },
        });
        expect(screen.getByRole("button", { name: "submit" })).toBeEnabled();
      });
    });
  });
});
