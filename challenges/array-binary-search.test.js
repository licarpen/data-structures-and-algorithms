const { binarySearch } = require('./array-binary-search');

describe('binary search algorithm', () => {
  describe('array shift', () => {
    it('returns the index of the key when the key is present', () => {
      expect(binarySearch([1, 2, 4, 5, 10], 5)).toEqual(3);
    });
    it('returns -1 when the key is not present', () => {
      expect(binarySearch([1, 2, 4, 5, 10], 3)).toEqual(-1);
    });
  });
});
