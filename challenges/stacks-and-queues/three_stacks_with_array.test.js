const { Stack } = require('./three_stacks_with_array');

describe('Stack class', () => {
  
  const stack = new Stack(2);
  
  it('initiates an empty stack', () => {
    const stackString = stack.displayAll();
    expect(stackString).toEqual('empty -> empty -> empty -> empty -> empty -> empty');
  });

  it('adds value 2 to stack 1', () => {
    stack.push(1, 2);
    expect(stack.display(1)).toEqual('empty -> 2');
  });

  it('adds value 3 to stack 1', () => {
    stack.push(1, 3);
    expect(stack.display(1)).toEqual('3 -> 2');
  });

  it('throws error when attempting to add value 4 to stack 1', () => {
    expect(() => {
      stack.push(1, 3);
    }).toThrow('stack size exceeded');
  });

  it('adds value 5 to stack 2', () => {
    stack.push(2, 5);
    expect(stack.display(2)).toEqual('empty -> 5');
    expect(stack.displayAll()).toEqual('empty -> empty -> empty -> 5 -> 3 -> 2');
  });
});
