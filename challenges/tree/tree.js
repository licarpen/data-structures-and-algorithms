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
      console.log(root.value); 
      array.push(root.value);
      this.inOrder(root.right, array); 
    } 
    return array;
  } 

  add(value){
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

const tree = new BinaryTree();
tree.add(10);
tree.add(5);
tree.add(15);
console.log(tree);
console.log(tree.inOrder(tree.root));


module.exports = BinaryTree;
