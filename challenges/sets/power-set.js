// 8.4 Power Set: Write a method to return all subsets of a set
// ex: the subsets of set {a, b, c, d} include [{}, {a}, {b}, {a, b}, {a, c}, {b, c}, {a, b, c}, {c}, {a, d}, {b, d}, {a, b, d}, {c, d}, {a, c, d}, {b, c, d}, {a, b, c, d}, {d}]

const addNewSubsetsToRunningSubsets = (runningSubsets, value) => {
  // const copyOfRunningSubsets = new Set(runningSubsets);
  const newSubsets = new Set();
  //copyOfRunningSubsets.forEach(subset => {
  runningSubsets.forEach(subset => {
    const newAddition = new Set(subset);
    newAddition.add(value);
    //runningSubsets.add(newAddition);
    newSubsets.add(newAddition);
  });
  newSubsets.forEach(subset => runningSubsets.add(subset));
};

const subsetInator = set => {
  // const startTime
  const runningSubset = new Set();
  runningSubset.add(new Set());
  set.forEach(element => {
    addNewSubsetsToRunningSubsets(runningSubset, element);
  });
  return runningSubset;
};

// runningSubset.add((new Set()).add('a'))
// console.log(runningSubset);
// addNewSubsetsToRunningSubsets(runningSubset, 'b');
// console.log(runningSubset);
// addNewSubsetsToRunningSubsets(runningSubset, 'c');
// console.log(runningSubset);

const theSet = new Set();
theSet.add('a');
theSet.add('b');
theSet.add('c');
theSet.add('d');
theSet.add('e');
theSet.add('f');
theSet.add('g');
theSet.add('h');
theSet.add('i');
theSet.add('j');
console.time('Subset');
subsetInator(theSet);
console.timeEnd('Subset');
