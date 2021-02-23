import fp from "lodash/fp";

const utils = {
  validate: fp.find(({ v, pred, message, el }) => !pred(v)),
};

export default utils;
