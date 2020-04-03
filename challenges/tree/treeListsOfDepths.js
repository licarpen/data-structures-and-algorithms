// Trees and graphs
// 4.3 Lists of Depths
// Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (if you have a tree with depth D, you'll have D linked lists)

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new LinkedListNode(value);
    if(!this.head) {
      this.head = node;
      return;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
}

class BinaryTreeNode {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value){
    if(!this.root){
      this.root = new BinaryTreeNode(value);
      return;
    }

    let currentNode = this.root;

    // eslint-disable-next-line no-constant-condition
    while(true){
      if(value < currentNode.value){
        if(!currentNode.left){
          currentNode.left = new BinaryTreeNode(value);
          return;
        }
        currentNode = currentNode.left;
      }
      else if(value > currentNode.value){
        if(!currentNode.right){
          currentNode.right = new BinaryTreeNode(value);
          return;
        }
        currentNode = currentNode.right;
      }
      else return 'Value already exists in binary tree';
    }
  }

  inOrder(node = this.root) {
    if(node){
      this.inOrder(node.left);
      // eslint-disable-next-line no-console
      console.log(node.value, '->');
      this.inOrder(node.right);
    }
  }

  levelTraverse(){
    if(this.root === null) return;
    this.root.level = 1;
    const queue = [this.root];
    const returnArray = [];
    while(queue.length > 0){
      const current = queue[0];
      if(current.left) {
        current.left.level = current.level + 1;
        queue.push(current.left);
      }
      if(current.right){
        current.right.level = current.level + 1;
        queue.push(current.right);
      } 
      returnArray.push(queue.shift());
    }

    const rootLinkedList = new LinkedList();
    rootLinkedList.add(returnArray[0].value);
    const linkedListArray = [rootLinkedList];
    for(let i = 1; i < returnArray.length; i++){
      if(returnArray[i].level === returnArray[i - 1].level){
        linkedListArray[linkedListArray.length - 1].add(returnArray[i].value);
      }
      else {
        const linkedList = new LinkedList();
        linkedList.add(returnArray[i].value);
        linkedListArray.push(linkedList);
      }
    }
    
    return linkedListArray;
  }
}

const tree = new BinaryTree();
tree.add(10);
tree.add(8);
tree.add(12);
tree.add(5);
tree.add(4);
tree.add(11);
tree.add(13);

tree.inOrder();

