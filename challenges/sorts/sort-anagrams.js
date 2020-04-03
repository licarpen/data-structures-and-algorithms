/* eslint-disable no-undef */
// 10.2 Group Anagrams: Write a method to sort an array of strings so that all the anagrams are next to each other.

// assume all characters are lowercase
// time complexity: n^2
// space complexity: 1

const strings = ['tab', 'dog', 'abcd', 'bat', 'ot', 'god', 'code', 'bacd', 'abt', 'to'];

const isAnagram = (str1, str2) => {
  if(str1.length !== str2.length) return false;
  const hash = {};
  for(i of str1){
    hash[i] ? hash[i]++ : hash[i] = 1;
  }
  for(i of str2){
    if(hash[i]) hash[i]--;
    else return false;
    if(hash[i] === 0) delete hash[i];
  }
  return Object.keys(hash).length === 0;
};

const sortByAnagrams = array => {
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
      if(isAnagram(array[i], array[j])){
        const removed = array.splice(j, 1)[0];
        array.splice(i + 1, 0, removed);
      }
    }
  }
};

sortByAnagrams(strings);
