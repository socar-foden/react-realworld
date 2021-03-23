import React from "react";
import { render, screen } from "@testing-library/react";
import fp from "lodash/fp";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { uiActions } from "../../reducers/ui/uiReducer";
import SideNav from "./SideNav";
import rootReducer from "../../reducers/rootReducer";

describe("[SideNavTest]", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(rootReducer)}>
        <Router history={createMemoryHistory()}>
          <SideNav open={true} setOpen={fp.noop} />
        </Router>
      </Provider>
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

  describe("상태 테스트", () => {
    it(`language가 변경되면 ${uiActions.CHANGE_LANGUAGE.type}이 호출된다.`, () => {
      const mockCall = jest.spyOn(uiActions, "CHANGE_LANGUAGE");

      userEvent.click(screen.getByRole("button", { name: "language" }));
      userEvent.click(screen.getByText("한국어"));
      expect(mockCall).toHaveBeenCalled();
    });
  });
});
