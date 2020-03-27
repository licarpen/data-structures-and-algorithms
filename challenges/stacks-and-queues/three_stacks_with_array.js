// Problem 3.1 from Cracking the Coding Interview
// Describe how to implement 3 stacks with an array

// stack: first in, last out. 
// methods: push, pop, peek

class Stack {
  constructor(length) {
    this.masterArray = Array(length * 3).fill(null);
    this.length = length;
    this.stack1Start = 0;
    this.stack1Length = 0;
    this.stack2Start = length;
    this.stack2Length = 0;
    this.stack3Start = 2 * length;
    this.stack3Length = 0;

    this.indexMapStart = {
      1: this.stack1Start,
      2: this.stack2Start,
      3: this.stack3Start
    };

    this.indexMapLength = {
      1: this.stack1Length,
      2: this.stack2Length,
      3: this.stack3Length
    };
  }

  push(stackNum, data) {
    // check to make sure not overwriting first element in next stack.  If so, throw error.  
    if(this.indexMapLength[stackNum] >= this.length) {
      console.log('Stack size exceeded');
      return;
    }
    
    this.masterArray[this.indexMapStart[stackNum] + this.indexMapLength[stackNum]] = data;
    ++this.indexMapLength[stackNum];
  }

  // pop(stackNum) {
  //   return this.fakeStack.pop();
  // }

  // peek(stackNum) {
  //   return this.fakeStack[this.fakeStack.length - 1]
  // }

  displayAll() {
    console.log(this.masterArray);
  }

  display(stackNum) {
    console.log(this.masterArray.slice(this.indexMapStart[stackNum], this.indexMapStart[stackNum] + this.length).reverse().join(' -> '));
  }
}
