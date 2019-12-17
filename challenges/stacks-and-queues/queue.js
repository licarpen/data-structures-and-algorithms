class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    const node = new Node(value, null);
    if(this.isEmpty()){
      this.front = node;
    }
    else {
      this.back.next = node;
    }
    this.back = node;
  }

  dequeue(){
    if(this.isEmpty()) return null;
    const front = this.front;
    this.front = this.front.next;
    if(!this.front) this.back = null;
    return front;
  }

  peek(){
    if(this.isEmpty()) return null;
    return this.front.value; 
  }

  isEmpty(){
    return !this.front;
  }
}

module.exports = { Queue };
