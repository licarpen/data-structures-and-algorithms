class Node {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }
  add(value) {
    if(!this.root){
      this.root = new Node(value);
      return;
    }
    let currentNode = this.root;
    console.log(currentNode, 'current node');

    // eslint-disable-next-line no-constant-condition
    while(true){
      if(value < currentNode.value){
        if(!currentNode.left){
          currentNode.left = new Node(value);
          return;
        }
        currentNode = currentNode.left;
      }
      else if(value > currentNode.value){
        if(!currentNode.right){
          currentNode.right = new Node(value);
          return;
        }
        currentNode = currentNode.right;
      }
      else return 'Value already exists in binary tree';
    }
  }
}
