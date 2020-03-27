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
      if(currentNode.value === value) return true;
      currentNode = currentNode.next;
    }  
    return false;
  }

  toString(){
    let str = '';
    let currentNode = this.head;
    while(currentNode){
      str += `${currentNode.value.toString()} -> `;
      currentNode = currentNode.next;
    }
    return `${str}[x]`;
  }

  append(value){
    const node = new Node(value);
    let currentNode = this.head;
    while(currentNode.next) currentNode = currentNode.next;
    currentNode.next = node;
    this.length ++;
  }

  insertBefore(value, reference){
    if(this.head.value === reference){
      this.insert(value);
      return true;
    }
    let currentNode = this.head;
    let previousNode = currentNode;
    while(currentNode){
      if(currentNode.value === reference){
        const node = new Node(value);
        previousNode.next = node;
        node.next = currentNode;
        this.length ++;
        return true;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return false;
  }

  insertAfter(value, reference){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === reference){
        let previousNode = currentNode;
        currentNode = currentNode.next;
        const node = new Node(value);
        node.next = currentNode;
        previousNode.next = node;
        return true;
      }
      currentNode = currentNode.next;
      this.length ++;
    }
    return false;   
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

  removeDuplicates(){
    let hash = {};
    let currentNode = this.head;
    let previous = null;
    while(currentNode !== null){
      if(hash[currentNode.value]){
        previous.next = currentNode.next;
      }
      else {
        hash[currentNode.value] = 1;
        previous = currentNode;
      }
      currentNode = currentNode.next;
    }
  }
}

module.exports = { LinkedList, Node };
