import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userEvent from "@testing-library/user-event";
import rootReducer from "../../reducers/rootReducer";
import { uiActions } from "../../reducers/ui/uiReducer";
import Header from "./Header";

describe("[Header]", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(rootReducer)}>
        <Header />
      </Provider>
    );
  });

  describe("UI 테스트", () => {
    it("구성요소 테스트", () => {
      expect(
        screen.getByRole("button", { name: "profile" })
      ).toBeInTheDocument();
      expect(screen.getByRole("input", { name: "theme" })).toBeInTheDocument();
    });
  });

  describe("상태 테스트", () => {
    it(`theme 스위치 버튼을 클릭하면 ${uiActions.CHANGE_THEME.type}이 호출된다.`, () => {
      const mockCall = jest.spyOn(uiActions, "CHANGE_THEME");

      userEvent.click(screen.getByRole("input", { name: "theme" }));
      expect(mockCall).toHaveBeenCalled();
    });
  });
});
