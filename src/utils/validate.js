import fp from "lodash/fp";

const validate = fp.find(([v, pred, message, ref]) => !pred(v));

export default validate;
