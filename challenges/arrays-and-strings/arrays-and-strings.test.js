const { isUnique } = require('./isUnique');
const { isPermutation } = require('./checkPermutation');

describe('arrays and strings', () => {
  describe('isUnique function', () => {
    it('returns true when characters of string are unique', () => {
      expect(isUnique('cat')).toEqual(true);
    });
    it('returns false when characters are not unique', () => {
      expect(isUnique('dad')).toEqual(false);
    });
  });
  describe('isPermutation function', () => {
    it('returns false when str 1 is a difference length than str2', () => {
      expect(isPermutation('cat', 'tatc')).toEqual(false);
    });
    it('returns true when str 1 is a permutation of str2', () => {
      expect(isPermutation('catt', 'tatc')).toEqual(true);
    });
    it('returns false when str2 is not a permutation of str1', () => {
      expect(isPermutation('cat', 'dac')).toEqual(false);
    });
  });
});

