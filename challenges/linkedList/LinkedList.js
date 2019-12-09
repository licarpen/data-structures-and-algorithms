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
    return 'success';
  }

  includes(value){
    return true;
  }

  toString(){
    return 'elements in linked list';
  }
}

module.exports = { LinkedList, Node };
