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

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue;
    this.catQueue = new Queue;
  }

  queueAnimal(animal){
    if(animal.type === 'cat'){
      this.catQueue.enqueue(animal);
    }
    else if(animal.type === 'dog'){
      this.dogQueue.enqueue(animal);
    }
    else return;
  }

  dequeue(preference){
    if(preference === 'cat'){
      this.catQueue.dequeue();
    }
    else if(preference === 'dog'){
      this.dogQueue.dequeue();
    }
    else return;
  }
  
  dogString(){
    let str = '';
    let currentNode = this.dogQueue.front;
    while(currentNode){
      str += `${currentNode.value.name.toString()} -> `;
      currentNode = currentNode.next;
    }
    return `${str}[x]`;
  }

  catString(){
    let str = '';
    let currentNode = this.catQueue.front;
    while(currentNode){
      str += `${currentNode.value.name} -> `;
      currentNode = currentNode.next;
    }
    return `${str}[x]`;
  }
}

module.exports = AnimalShelter;
