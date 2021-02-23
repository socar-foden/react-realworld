import fp from "lodash/fp";

const utils = {
  validate: fp.find(([v, pred, message, ref]) => !pred(v)),
};

export default utils;
