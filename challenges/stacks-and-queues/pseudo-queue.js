const { Stack } = require('./stack');

class PseudoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value){
    // move stack1 over one by one to stack2 and then add the new value to the top of stack2
    while(this.stack1){
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    // move stack2 back over to stack 1 one by one
    while(this.stack2){
      this.stack1.push(this.stack2.pop());
    }
  }
  dequeue(){
    // get first item from stack1
    return this.stack1.pop();
  }
  toString(){
    let str = '';
    let currentNode = this.stack1.top;
    while(currentNode){
      str += `${currentNode.value.toString()} -> `;
      currentNode = currentNode.next;
    }
    return `${str}[x]`;
  }
}

module.exports = { PseudoQueue };
