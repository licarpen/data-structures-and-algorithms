const binarySearch = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;
  let m;
  let count = 1;

  while(l < r){
    m = Math.floor((l + r) / 2);
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

const numBinarySearch = (arrSize) => {
  let arr = [];
  for(let j = 0; j < arrSize; j++){
    arr[j] = j;
  }
  const randomTarget = Math.round(Math.random() * arrSize);
  return binarySearch(arr, randomTarget);
};

console.log(numBinarySearch(10000));
