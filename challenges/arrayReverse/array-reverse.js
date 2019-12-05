const reverseArray = arr => {
    return arr.map((val, i) => arr[arr.length - i - 1]
    );
};

const reverseArray2 = arr => {
    const len = arr.length;
    const reversedArr = [];
    for(let i = 0; i < len; i++){
        reversedArr[len - i - 1] = arr[i];
    }
    return reversedArr;
};

const reverseArray3 = arr => {
    const reversedArr = [];
    arr.forEach(element => {
        reversedArr.unshift(element);
    });
    return reversedArr;
};

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray2([1, 2, 3]));
console.log(reverseArray3([1, 2, 3]));