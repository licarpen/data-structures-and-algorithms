const replaceValues = (root) => {
  if(root !== null){
    // check if divisible and replace
    if(root.value % 3 === 0 && root.value % 5 === 0){
      root.value = 'FizzBuzz';
    } 
    else if(root.value % 3 === 0){
      root.value = 'Fizz';
    }
    else if(root.value % 5 === 0){
      root.value = 'Buzz';
    }
    else root.value = root.value.toString();
    replaceValues(root.left); 
    replaceValues(root.right); 
  } 
};

const fizzBuzzTree = (tree) => {
  replaceValues(tree.root);
};

module.exports = fizzBuzzTree;
