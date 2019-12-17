const { PseudoQueue } = require('./pseudo-queue');

describe('PseudoQueue class', () => {
  const pseudoQueue = new PseudoQueue();
  pseudoQueue.enqueue(0);
  pseudoQueue.enqueue(1);
  it('successfully sets up queue with 2 values', () => {
    expect(pseudoQueue.toString()).toEqual('0 -> 1 -> [x]');
  });
});
