const { insertShiftArray } = require('../array-shift');

describe('array shift module', () => {
  describe('array shift', () => {
    it('properly inserts element in middle of array', () => {
      expect(insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
