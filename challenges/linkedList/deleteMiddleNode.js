// 2.3 Delete the Middle Node
// Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node. 

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

  add(node){
    if (!this.head) this.head = node;
    else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }
  }

  toString(){
    return JSON.stringify(this);
  }

  deleteMiddleNode(node){
    if(node === null || node.next === null) throw new Error('Please provide a node. Node cannot be last in the Linked List');
    node.value = node.next.value;
    node.next = node.next.next;
  }
}

const list = new LinkedList();
const middleNode = new Node(10);
list.add(new Node(3));
list.add(new Node(5));
list.add(middleNode);
list.add(new Node(4));
list.add(new Node(6));
const lastNode = new Node(100);
list.add(lastNode);

console.log(list.toString());
list.deleteMiddleNode(middleNode);
console.log(list.toString());
list.deleteMiddleNode(lastNode);