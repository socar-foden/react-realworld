import React from "react";
import { render, screen } from "@testing-library/react";
import fp from "lodash/fp";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import SideNav from "./SideNav";

describe("[SideNavTest]", () => {
  beforeEach(() => {
    render(
      <Router history={createMemoryHistory()}>
        <SideNav open={true} setOpen={fp.noop} />
      </Router>
    );
  });

  describe("UI 테스트", () => {
    it("구성요소 테스트", () => {
      expect(
        screen.getByRole("navigation", { name: "side-nav" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "language" })
      ).toBeInTheDocument();
    });
  });
});
