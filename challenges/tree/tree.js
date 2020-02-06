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

  inOrder(root, array = []){
    if(root !== null){ 
      this.inOrder(root.left, array); 
      array.push(root.value);
      this.inOrder(root.right, array); 
    } 
    return array;
  } 

  preOrder(root, array = []){
    if(root !== null){
      array.push(root.value); 
      this.preOrder(root.left, array); 
      this.preOrder(root.right, array); 
    } 
    return array;
  } 

  postOrder(root, array = []){
    if(root !== null){
      this.postOrder(root.right, array); 
      array.push(root.value); 
      this.postOrder(root.left, array); 
    } 
    return array;
  } 

  breadthFirst(){
    const treeArray = [this.root];
    const elementsBFS = [];
    while(treeArray.length > 0) {
      const currentNode = treeArray.shift();
      elementsBFS.push(currentNode.value);
      if(!currentNode.left && !currentNode.right) {
        continue;
      }
      if(currentNode.left) {
        treeArray.push(currentNode.left);
      }
      if(currentNode.right) {
        treeArray.push(currentNode.right);
      }
    }
    return elementsBFS;
  }

  contains(value){
    const array = this.inOrder(this.root);
    if(array.includes(value)){
      return true;
    }
    else return false;
  }

  // tree is a binary search tree so max value will reside in right-most node
  findMaxValue(){
    if(!this.root){
      return 'Empty tree';
    }
    while(this.root.right){
      this.root = this.root.right;
    }
    return this.root.value;
  }

  add(value){
    if(!this.root){
      this.root = new Node(value);
      return;
    }
    let currentNode = this.root;

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

module.exports = BinaryTree;
