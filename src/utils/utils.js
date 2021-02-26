import fp from "lodash/fp";
import { fork, put, takeLatest } from "redux-saga/effects";

const utils = {
  validate: fp.find(({ v, pred, message, el }) => !pred(v)),
  createAsyncSaga: (type, api) =>
    function* ({ payload }) {
      try {
        const res = yield fork(api, payload);
        yield put({ type: `${type}_SUCCESS`, payload: res });
      } catch (e) {
        console.error(`[Saga-${type}] ERROR :: `, e);
        yield put({ type: `${type}_FAILURE`, payload: e });
      }
    },
};

export function* watchSaga(action, api) {
  yield takeLatest(action, utils.createAsyncSaga(action.type, api));
}

export default utils;
