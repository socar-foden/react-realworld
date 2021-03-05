import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createStore } from "redux";
import rootReducer from "../../reducers/rootReducer";
import { userActions } from "../../reducers/user/userReducer";
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

  it("인증이 된 상태면, 받은 컴포넌트를 렌더링", () => {
    store.dispatch({
      type: userActions.AUTHENTICATION_SUCCESS.type,
      payload: {
        user: {
          email: "jake@jake.jake",
          token: "token~~!@~!@",
          username: "jacob",
        },
      },
    });
    expect(screen.getByText("test dom")).toBeInTheDocument();
  });
});
