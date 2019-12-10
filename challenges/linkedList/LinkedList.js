class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    const node = new Node(value);
    if(this.head === null){
      this.head = node;
    }
    else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value){
    let currentNode = this.head;
    if(currentNode.value === value){
      return true;
    }
    while(currentNode.next !== null){
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
  }

  insertBefore(value, reference){
    const node = new Node(value);
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
}

module.exports = { LinkedList, Node };
