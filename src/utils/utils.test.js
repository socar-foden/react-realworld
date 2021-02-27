import SagaTester from "redux-saga-tester";
import { all } from "redux-saga/effects";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
import utils from "../utils/utils";

describe("[utils]", () => {
  describe("[validate]", () => {
    let conditionList;

    it("모든 조건이 맞을시 undefined를 반환", () => {
      conditionList = [
        { v: 2, pred: (v) => v === 2, message: "2가 아닙니다.", el: {} },
        { v: 3, pred: (v) => v === 3, message: "3이 아닙니다.", el: {} },
        { v: 4, pred: (v) => v === 4, message: "4가 아닙니다.", el: {} },
        { v: 5, pred: (v) => v === 5, message: "5가 아닙니다.", el: {} },
      ];
      expect(utils.validate(conditionList)).toBeUndefined();
    });

    it("하나라도 만족하지 못할 시, 해당 세트를 반환", () => {
      const wrongSet = {
        v: 3,
        pred: (v) => v === 4,
        message: "4가 아닙니다.",
        el: {},
      };

      conditionList = [
        { v: 2, pred: (v) => v === 2, message: "2가 아닙니다.", el: {} },
        wrongSet,
        { v: 4, pred: (v) => v === 4, message: "4가 아닙니다.", el: {} },
        { v: 5, pred: (v) => v === 5, message: "5가 아닙니다.", el: {} },
      ];
      expect(utils.validate(conditionList)).toEqual(wrongSet);
    });
  });

  describe("[createAsyncSaga, watchSaga]", () => {
    describe("XXXX타입 액션이 dispatch되면 api를 요청", () => {
      it("성공하면 XXXX_SUCCESS를 dispatch 한다", async () => {
        const sagaTester = new SagaTester({});
        function* testSaga() {
          yield all([
            utils.watchSaga(createAction("TEST_ACTION"), () => {
              const mock = new MockAdapter(axios);
              mock.onPost("/test").reply(200);
              return axios.post("/test");
            }),
          ]);
        }

        sagaTester.start(testSaga);
        sagaTester.dispatch({ type: "TEST_ACTION" });
        await sagaTester.waitFor("TEST_ACTION_SUCCESS");
        expect(sagaTester.getLatestCalledAction().type).toEqual(
          "TEST_ACTION_SUCCESS"
        );
      });

      // it("실패하면 XXXX_FAILURE를 dispatch 한다", () => {

      // });
    });
  });
});
