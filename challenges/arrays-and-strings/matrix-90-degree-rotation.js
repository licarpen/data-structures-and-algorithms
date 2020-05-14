// Problem 1.7 You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise) in place.

// Example 1:
// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],
// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
//

// Example 2:
// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 
// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

const medium = [
  ['x1', 'y1', 'z1', 't1'],
  ['x2', 'y2', 'z2', 't2'],
  ['x3', 'y3', 'z3', 't3'],
  ['x4', 'y4', 'z4', 't4']
];

// output should be [
//   ['x1', 'x2', 'x3', 'x4'],
//   ['y1', 'y2', 'y3', 'y4'],
//   ['z1', 'z2', 'z3', 'z4'],
//   ['t1', 't2', 't3', 't4'],
// ]

const swapRowsColumns = matrix => {
  const columns = matrix.length;
  const rows = matrix[0].length;
  for(let i = 0; i < rows; i++){
    let j = i + 1;
    while(j < columns){
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
      ++j;
    }
  }
  //matrix.forEach(row => console.log(row));
  return matrix;
};

//swapRowsColumns(medium);

const swapColumns = matrix => {
  const columns = matrix.length;
  for(let i = 0; i < columns; i++){
    for(let j = 0; j < columns / 2; j++){
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][columns - j - 1];
      matrix[i][columns - j - 1] = temp;
    }
  }
  matrix.forEach(row => console.log(row));
};

swapColumns(swapRowsColumns(medium));
