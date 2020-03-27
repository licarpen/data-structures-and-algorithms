const charactersHash = string => {
  const hashmap = {};
  [...string].forEach(char => {
    hashmap[char] ? hashmap[char] = hashmap[char] + 1 : hashmap[char] = 1;
  });
  return hashmap;
};

console.log(charactersHash('kitty cat'));
