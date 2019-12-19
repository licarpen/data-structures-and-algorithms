const Stack = require('../stacks-and-queues/stack');

const validateBrackets = input => {
  const stack = new Stack();
  stack.push('anchor');
  const brackets = ['{', '}', '[', ']', '(', ')'];
  const matches = {
    ']': '[',
    '}': '{',
    ')': '('
  };

  for(let i of input){
    if(brackets.includes(i)){
      matches[i] === stack.top.value ? stack.pop() : stack.push(i);
    } 
  }
  return (stack.top.value === 'anchor');
};

module.exports = validateBrackets;
