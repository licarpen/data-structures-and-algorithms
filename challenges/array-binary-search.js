const binarySearch = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;
  let m;

  while(l < r){
    m = Math.floor((l + r) / 2);
    if(arr[m] === target) return m;
    else if(arr[m] < target){
      l = m + 1;
    }
    else if(arr[m] > target){
      r = m - 1;
    }
  }  
  return -1;
};

module.exports = { binarySearch };
