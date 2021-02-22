import validate from "./validate";

describe("[utils]", () => {
  describe("[validate]", () => {
    let conditionList;

    it("모든 조건이 맞을시 undefined를 반환", () => {
      conditionList = [
        [2, (v) => v === 2, "2가 아닙니다.", {}],
        [3, (v) => v === 3, "3이 아닙니다.", {}],
        [4, (v) => v === 4, "4가 아닙니다.", {}],
        [5, (v) => v === 5, "5가 아닙니다.", {}],
      ];
      expect(validate(conditionList)).toBeUndefined();
    });

    it("하나라도 만족하지 못할 시, 해당 세트를 반환", () => {
      const wrongSet = [3, (v) => v === 4, "4가 아닙니다.", {}];

      conditionList = [
        [2, (v) => v === 2, "2가 아닙니다.", {}],
        wrongSet,
        [4, (v) => v === 4, "4가 아닙니다.", {}],
        [5, (v) => v === 5, "5가 아닙니다.", {}],
      ];
      expect(validate(conditionList)).toEqual(wrongSet);
    });
  });
});
