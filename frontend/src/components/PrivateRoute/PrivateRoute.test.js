import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createStore } from "redux";
import rootReducer from "../../reducers/rootReducer";
import PrivateRoute from "./PrivateRoute";

describe("[PrivateRoute]", () => {
  let store;
  let history;

  beforeEach(() => {
    store = createStore(rootReducer);
    history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <PrivateRoute>
            <div>test dom</div>
          </PrivateRoute>
        </Router>
      </Provider>
    );
  });

  it("인증이 되지 않은 상태면, /sign-in으로 리다이렉트", () => {
    expect(history.location.pathname).toBe("/sign-in");
  });

  it("인증여부를 localStorage의 jwt를 통해 확인한다.", () => {
    const mockCall = jest.spyOn(localStorage, 'getItem');

    expect(mockCall).toHaveBeenCalled();
  });
});
