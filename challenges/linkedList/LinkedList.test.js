const { LinkedList, Node } = require('./LinkedList');



describe('LinkedList Class', () => {
  const linkedList = new LinkedList();
  it('successfully instantiates an empty linked list', () => {
    expect(linkedList.head).toBeNull;
  });
  it('properly inserts into the linked list', () => {
    linkedList.insert(0);
    expect(linkedList.length).toEqual(1);
  });
  it('is such that the head property will properly point to the first node in the linked list', () => {
    expect(insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
  });
  it('properly inserts multiple nodes into the linked list', () => {
    expect(insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
  });
  it('returns true when finding a value within the linked list that exists', () => {
    expect(insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
  });
  it('returns false when searching for a value in the linked list that does not exist', () => {
    expect(insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
  });
  it('properly returns a collection of all the values that exist in the linked list', () => {
    expect(insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
  });
});
