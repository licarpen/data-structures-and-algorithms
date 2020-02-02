const BinaryTree = require('./tree.js');

describe('BinaryTree class', () => {
  let tree;
  beforeEach(() => {
    tree = new BinaryTree();
  });
  it('successfully instantiates an empty binary tree', () => {
    expect(tree.root).toBeNull();
  });
  it('properly inserts a value into the tree', () => {
    tree.add(10);
    expect(tree.root).toEqual({ 'left': null, 'right': null, 'value': 10 }); 
  });
  it('records elements to inorder array in correct order', () => {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.inOrder(tree.root)).toEqual([5, 10, 15]); 
  });
  it('records elements to preorder array in correct order', () => {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.preOrder(tree.root)).toEqual([10, 5, 15]); 
  });
  it('records elements to postorder array in correct order', () => {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.postOrder(tree.root)).toEqual([15, 10, 5]); 
  });
  it('returns true if a value is contained in the tree', () => {
    tree.add(10);
    expect(tree.contains(10)).toEqual(true); 
  });
  it('returns false if a value is not contained in the tree', () => {
    tree.add(10);
    expect(tree.contains(5)).toEqual(false); 
  });
  it('exectutes a breadthFirst search appropriately for a tree with 5 values', () => {
    tree.add(5);
    tree.add(7);
    tree.add(3);
    tree.add(4);
    expect(tree.breadthFirst()).toEqual([5, 3, 7, 4]);
  });
  it('finds the maximum value for a tree with right nodes', () => {
    tree.add(5);
    tree.add(7);
    tree.add(3);
    tree.add(8);
    expect(tree.findMaxValue()).toEqual(8);
  });
  it('finds the maximum value for a tree with only one value', () => {
    tree.add(5);
    expect(tree.findMaxValue()).toEqual(5);
  });
  it('returns message when tree is empty when findMaxValue is called', () => {
    expect(tree.findMaxValue()).toEqual('Empty tree');
  });
});
