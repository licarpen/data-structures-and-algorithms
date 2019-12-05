const { binarySearch } = require('./array-binary-search');

describe('binary search algorithm', () => {
  describe('array shift', () => {
    it('returns the index of the key when the key is present in the first half of the array', () => {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual(1);
    });  
    it('returns the index of the key when the key is present in the second half of the array', () => {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8)).toEqual(7);
    });   
    it('returns -1 when the key is not present', () => {
      expect(binarySearch([1, 2, 4, 5, 6], 3)).toEqual(-1);
    });

  });
});
