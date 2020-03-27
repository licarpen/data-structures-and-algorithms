// Problem 1.1 from Cracking the Coding Interview
// 3/2/2020

// isUnique() returns true if all characters are unique and false otherwise.

const isUnique = string => {
  const hash = {};
  for(let i = 0; i < string.length; i++){
    if(hash[string[i]]) return false;
    else hash[string[i]] = 1;
  }
  return true;
};

module.exports = { isUnique };
