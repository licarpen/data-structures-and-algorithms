class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  insert(value){
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length ++;
  }

  includes(value){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === value){
        return true;
      }
      currentNode = currentNode.next;
    }  
    return false;
  }

  toString(){
    let str = '';
    let currentNode = this.head;
    str += currentNode.value;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
      str += ` -> ${currentNode.value.toString()}`;
    }
    return str;
  }

  append(value){
    const node = new Node(value);
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length ++;
  }

  insertBefore(value, reference){
    const node = new Node(value);
    this.length ++;
    let currentNode = this.head;
    if(currentNode.value === reference){
      node.next = this.head;
      this.head = node;
      return true;
    }
    let previousNode;
    while(currentNode.value !== reference){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    node.next = currentNode;
    previousNode.next = node;
    return true;
  }

  insertAfter(value, reference){
    const node = new Node(value);
    this.length ++;
    let currentNode = this.head;
    while(currentNode.value !== reference){
      currentNode = currentNode.next;
    }
    let previousNode = currentNode;
    currentNode = currentNode.next;
    node.next = currentNode;
    previousNode.next = node;
    return true;
  }

  delete(value){
    let currentNode = this.head;
    this.length --;
    do{
      if(currentNode.value === value){
        return true;
      }
      currentNode = currentNode.next;
    }
    while(currentNode.next !== null);
    return false;
  }

  kFromEnd(k){
    let currentNode = this.head;
    if(k > this.length - 1 || k < 0){
      return 'encountered an error';
    }
    for(let i = 0; i < this.length - k - 1; i++){ 
      currentNode = currentNode.next; 
    }
    return currentNode.value;
  } 
}

module.exports = { LinkedList, Node };
