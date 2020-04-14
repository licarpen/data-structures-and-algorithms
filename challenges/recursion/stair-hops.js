// 8.1 Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

// ex1: for n = 2, there are 2 unique ways to run up the stairs: [1, 1], [2]
// ex2: for n = 3, there are 4 unique ways:  [1, 1, 1], [1, 2], [2, 1], [3]
// ex3: for n = 4, there are 7 unique ways: [1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2], [1, 3], [3, 1]

const countWays = n => {
  const stepSizes = [1, 2, 3];
  let count = 0;
  if(n < 1) return;
  const takeOneHop = stepsTaken => {
    stepSizes.forEach(step => {
      let stepsAfterHop = stepsTaken;
      stepsAfterHop += step;
      if(stepsAfterHop < n){
        takeOneHop(stepsAfterHop);
      }
      else if(stepsAfterHop === n){
        count++;
      }
    });
    
  };
  takeOneHop(0);
  return count;
};

const countWaysTakeTwo = (n, memo = {}) => {
  if(n < 0){
    return 0;
  }
  else if(n === 0) {
    return 1;
  }
  else if(memo[n]) {
    return memo[n];
  }
  else {
    memo[n] = countWaysTakeTwo((n - 1), memo) + countWaysTakeTwo((n - 2), memo) + countWaysTakeTwo((n - 3), memo);
    return memo[n];
  }
};

const countWaysTakeFour = (n,  memo4 = { 0: 1 }) => {
  if(n < 0) return 0;
  return memo4[n] ? memo4[n] : memo4[n] = countWaysTakeFour(n - 1,  memo4) +  countWaysTakeFour(n -  2,  memo4) + countWaysTakeFour(n  -  3,   memo4);
};

const countWaysTakeFive = (n,  memo5 = { 0: 1 }) =>
  n < 0 ? 0 :
    memo5[n] ? memo5[n] :
      memo5[n] = countWaysTakeFour(n - 1,  memo5) +  countWaysTakeFour(n -  2,  memo5) + countWaysTakeFour(n  -  3,   memo5);

module.exports = { countWays, countWaysTakeTwo, countWaysTakeFour, countWaysTakeFive };
