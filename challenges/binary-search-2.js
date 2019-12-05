const binarySearch = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;
  let count = 1;

  while(l < r){
    const m = Math.floor((l + r) / 2);
    if(arr[m] === target) return count;
    else if(arr[m] < target){
      l = m + 1;
      count++;
    }
    else if(arr[m] > target){
      r = m - 1;
      count++;
    }
  }  
  return count;
};

const countBinarySearch = arrSize => {
  let arr = [];
  for(let j = 0; j < arrSize; j++){
    arr[j] = j;
  }
  const randomTarget = Math.round(Math.random() * arrSize);
  return binarySearch(arr, randomTarget);
};
const getAvgCountForBinarySearch = (arrSize, n) => {
  const arr = [];
  for(let i = 0; i < n; i++){
    arr.push(countBinarySearch(arrSize));
  }
  return arr.reduce((acc, count) => { return acc + count; }, 0) / n;
};

const generatePowers2Arr = (n) => {
  const arr = [];
  for(let i = 0; i < n; i++){
    arr.push(2 ** i);
  }
  return arr;
};

const getAvgCountsForBinarySearches = () => {
  const arr = generatePowers2Arr(20);
  return arr.map(order => getAvgCountForBinarySearch(order, 1000));
};
console.log(getAvgCountsForBinarySearches());
