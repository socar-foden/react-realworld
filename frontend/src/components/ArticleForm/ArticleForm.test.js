import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ArticleForm from "./ArticleForm";

describe("[ArticleForm]", () => {
  beforeEach(() => {
    render(<ArticleForm />);
  });

  describe("UI 테스트", () => {
    it("폼 구성요소 테스트", () => {
      expect(screen.getByRole("input", { name: "title" })).toBeInTheDocument();
      expect(screen.getByRole("input", { name: "body" })).toBeInTheDocument();
      expect(
        screen.getByRole("input", { name: "description" })
      ).toBeInTheDocument();
      expect(screen.getByRole("input", { name: "tags" })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "submit" })
      ).toBeInTheDocument();
      expect(screen.getByRole("figure", { name: "tags" })).toBeInTheDocument();
    });
  });

  describe("UX 테스트", () => {
    beforeEach(() => {
      fireEvent.change(screen.getByRole("input", { name: "title" }), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByRole("input", { name: "body" }), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByRole("input", { name: "title" }), {
        target: { value: "" },
      });
    });

    describe("title, body, description 값이", () => {
      beforeEach(() => {
        fireEvent.change(screen.getByRole("input", { name: "title" }), {
          target: { value: "" },
        });
        fireEvent.change(screen.getByRole("input", { name: "body" }), {
          target: { value: "" },
        });
        fireEvent.change(screen.getByRole("input", { name: "description" }), {
          target: { value: "" },
        });
      });

      it("하나라도 없으면 submit 버튼은 비활성화", () => {
        fireEvent.change(screen.getByRole("input", { name: "title" }), {
          target: { value: "test-title" },
        });
        expect(screen.getByRole("button", { name: "submit" })).toBeDisabled();

        fireEvent.change(screen.getByRole("input", { name: "body" }), {
          target: { value: "test-body" },
        });
        expect(screen.getByRole("button", { name: "submit" })).toBeDisabled();
      });

      it("모두 있으면 submit 버튼은 활성화", () => {
        fireEvent.change(screen.getByRole("input", { name: "title" }), {
          target: { value: "test-title" },
        });
        fireEvent.change(screen.getByRole("input", { name: "body" }), {
          target: { value: "test-body" },
        });
        fireEvent.change(screen.getByRole("input", { name: "description" }), {
          target: { value: "test-description" },
        });
        expect(screen.getByRole("button", { name: "submit" })).toBeEnabled();
      });
    });
  });
});
