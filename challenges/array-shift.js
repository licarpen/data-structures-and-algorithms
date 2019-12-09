const insertShiftArray = (arr, element) => {
  const middleIndex = Math.floor(arr.length / 2);
  const newArray = [];
  let firstHalf = true;
  for(let i = 0; i < arr.length + 1; i++){
    if(i === middleIndex){
      newArray[i] = element;
      firstHalf = false;
      i++;
    }
    firstHalf ? newArray[i] = arr[i] : newArray[i] = arr[i - 1]
    ;    
  }
  return newArray;
};

module.exports = { insertShiftArray };
