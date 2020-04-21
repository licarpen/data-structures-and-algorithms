// 1.4 Palindrome Permutation
// Given a string, write a function to check if it is a permutation of a palindrome.  The palindrome does not need to be limited to just dictionary words.

// Input: Tact coa
// Output: True
// Input: Cat
// Output: False

// Assumptions: ignore whitespace and ignore capitalization

const isPalindromePermutation = string => {
  const hash = {};
  for(let letter of string){
    const regex = /[A-Za-z]/;
    if(!regex.test(letter)) continue;
    const char = letter.toLowerCase();
    if(hash[char]) delete hash[char];
    else (hash[char]) = char;
  }
  if(Object.keys(hash).length <= 1) return true;
  else return false;
};

isPalindromePermutation('taco cat');

// 1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remomve a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake ->  false

const isOneAway = (word1, word2) => {
  if(Math.abs(word1.length - word2.length) >= 2) return false;
  const checkFirst = word1.length > word2.length ? word1 : word2;
  const checkSecond = checkFirst === word1 ? word2 : word1;
  const hash = {};
  for(let letter of checkFirst){
    if(hash[letter]) hash[letter]++;
    else (hash[letter]) = 1;
  }
  for(let letter of checkSecond){
    if(hash[letter]){
      if(hash[letter] === 1) delete hash[letter];
      else hash[letter]--;
    }
    else hash[letter] = 1;
  }
  return Object.values(hash).reduce((acc, curr) => {
    return acc + curr;
  }, 0) <= 2;
};

isOneAway('pale', 'PALE');

const isOneAwayForLoopsEdition = (word1, word2) => {
  if(Math.abs(word1.length - word2.length) >= 2) return false;
  const wordArguments = [word1, word2];
  [...wordArguments].sort((a, b) => b.length - a.length);
  // const checkFirst = word1.length > word2.length ? word1 : word2;
  // const checkSecond = checkFirst === word1 ? word2 : word1;
  const checkFirst = wordArguments[0];
  const checkSecond = wordArguments[1];
  let differences = 0;

  if(checkFirst.length === checkSecond.length)
    for(let i = 0; i < checkFirst.length; ++i){
      if(checkFirst[i] === checkSecond[i]) continue;
      ++differences;
    }

  else {
    // differences = 1;
    for(let i = 0, j = 0; i < checkFirst.length; ++i, ++j){
      if(checkFirst[i] === checkSecond[j]) continue;
      ++i, ++differences;
    }
  }
  if(differences > 1) return false;
  return true;
};

//isOneAway("pale", "palrr")
isOneAwayForLoopsEdition('papapa', 'peApApA');
