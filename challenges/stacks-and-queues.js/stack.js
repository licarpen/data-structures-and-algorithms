class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    this.top = new Node(value, this.top);
  }

  pop(){
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek(){
    return this.top.value;
  }

  isEmpty(){
    return !this.top.value ? true : false;
  }
}