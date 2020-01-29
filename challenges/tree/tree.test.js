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
});
