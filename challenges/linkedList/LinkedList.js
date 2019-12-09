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
      this.next = this.head;
      this.head = node;
    }
    this.length ++; 
  }

  includes(value){
    let current = this.head;
    if(current.value === value){
      return true;
    }
    while(current.next !== null){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString(){
    let str;
    let current = this.head;
    str += current.value;
    while(current.next !== null){
      current.value = current.next;
      str += ` -> ${current.value}`;
    }
    return str;
  }
}

module.exports = { LinkedList, Node };
