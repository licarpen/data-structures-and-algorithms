const BinaryTree = require('../tree/tree.js');
const fizzBuzzTree = require('./fizz-buzz-tree.js');

describe('fizzBuzzTree function', () => {
  let tree;
  beforeEach(() => {
    tree = new BinaryTree();
  });
  it('converts a tree with 3, 6, and 9 to all fizzes', () => {
    tree.add(3);
    tree.add(6);
    tree.add(9);
    fizzBuzzTree(tree);
    expect(tree.inOrder(tree.root)).toEqual(['Fizz', 'Fizz', 'Fizz']);
  });
  it('converts a tree with 5, 10, and 20 to all buzzes', () => {
    tree.add(5);
    tree.add(10);
    tree.add(20);
    fizzBuzzTree(tree);
    expect(tree.inOrder(tree.root)).toEqual(['Buzz', 'Buzz', 'Buzz']);
  });
  it('converts a tree with 15 and 30 to all fizzbuzzes', () => {
    tree.add(15);
    tree.add(30);
    fizzBuzzTree(tree);
    expect(tree.inOrder(tree.root)).toEqual(['FizzBuzz', 'FizzBuzz']);
  });
  it('converts a tree with 2 and 4 to "2" and "4"', () => {
    tree.add(2);
    tree.add(4);
    fizzBuzzTree(tree);
    expect(tree.inOrder(tree.root)).toEqual(['2', '4']);
  });
  it('converts a tree with 1,3,5,15 to "1", "Fizz", "Buzz", "Fizzbuzz"', () => {
    tree.add(1);
    tree.add(3);
    tree.add(5);
    tree.add(15);
    fizzBuzzTree(tree);
    expect(tree.inOrder(tree.root)).toEqual(['1', 'Fizz', 'Buzz', 'FizzBuzz']);
  });
});
