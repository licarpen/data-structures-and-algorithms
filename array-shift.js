const insertShiftArray = (arr, element) => {
  const index = Math.floor(arr.length / 2);
  const newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(i === index){
      newArray[i] = element;
      i--;
    }
    newArray[i] = arr[i];
  }
};

console.log(insertShiftArray([1, 2, 4, 5], 3));

module.exports = { insertShiftArray };
