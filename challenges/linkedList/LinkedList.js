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
    // create a node with node value and next pointer of null
    const node = new Node(value);
    if(this.head === null){
      this.head = node;
    }
    else {
      node.next = this.head;
      this.head = node;
    }
    this.length ++; 
  }

  includes(value){
    return true;
  }

  toString(){
    return 'elements in linked list';
  }
}

module.exports = { LinkedList, Node };
