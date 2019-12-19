const PseudoQueue = require('./pseudo-queue');

describe('PseudoQueue class', () => {
  const pseudoQueue = new PseudoQueue();
  pseudoQueue.enqueue(0);
  it('successfully sets up a queue with one value', () => {
    expect(pseudoQueue.toString()).toEqual('0 -> [x]');
  });
  it('successfully sets up a queue with 2 values', () => {
    pseudoQueue.enqueue(1);
    expect(pseudoQueue.toString()).toEqual('0 -> 1 -> [x]');
  });
  it('successfully sets up a queue with 3 values', () => {
    pseudoQueue.enqueue(2);
    expect(pseudoQueue.toString()).toEqual('0 -> 1 -> 2 -> [x]');
  });
  it('successfully pops off the first queued node', () => {
    pseudoQueue.dequeue();
    expect(pseudoQueue.toString()).toEqual('1 -> 2 -> [x]');
  });
});
