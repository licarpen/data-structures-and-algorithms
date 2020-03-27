// Problem 1.2 from Cracking the Coding Interview
// 3/2/2020

// isPermuation(str1, str2) returns true if str1 is a permutation of str2 or vice versa
// Method is creating a hashmap for frequency of all characters in str1
// str2 is compared to hashmap, deleting one from frequency for each character.
// returns false if hashmap doesn't exist for character or if frequency drops below zero.
// Note: case and space sensitive

const isPermutation = (str1, str2) => {
  if(str1.length !== str2.length) return false;
  const hash = {};
  [...str1].forEach(char => hash[char] ? hash[char] = hash[char] + 1 : hash[char] = 1);
  const arr2 = [...str2];
  for(let i = 0; i < arr2.length; i++) {
    if(!hash[arr2[i]]) return false;
    hash[arr2[i] = hash[arr2[i]] - 1];
    if(hash[arr2[i]] < 0) return false;
  }
  return true; 
};

module.exports = { isPermutation };
