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
      this.inOrder(root.left, array); 
      this.inOrder(root.right, array); 
    } 
    return array;
  } 

  postOrder(root, array = []){
    if(root !== null){
      this.inOrder(root.right, array); 
      array.push(root.value); 
      this.inOrder(root.left, array); 
    } 
    return array;
  } 

  contains(value){
    const array = this.inOrder(this.root);
    if(array.includes(value)){
      return true;
    }
    else return false;
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
