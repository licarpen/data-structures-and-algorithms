const { LinkedList } = require('./LinkedList');

describe('LinkedList Class', () => {
  const linkedList = new LinkedList();
  it('successfully instantiates an empty linked list', () => {
    expect(linkedList.head).toBeNull;
  });
  it('properly inserts into the linked list', () => {
    linkedList.insert(0);
    expect(linkedList.head).toEqual({ 'next': null, 'value': 0 }); 
  });
  it('is such that the head property will properly point to the first node in the linked list', () => {
    expect(linkedList.head).toEqual({ 'next': null, 'value': 0 });
  });
  it('properly inserts multiple nodes into the linked list', () => {
    linkedList.insert(1);
    linkedList.insert(2);
    let nextNode = linkedList.head.next;
    nextNode = nextNode.next;
    expect(nextNode.value).toEqual(0);
  });
  it('returns true when finding a value within the linked list that exists', () => {
    expect(linkedList.includes(1)).toBeTruthy();
  });
  it('returns false when searching for a value in the linked list that does not exist', () => {
    expect(linkedList.includes(4)).toBeFalsy();
  });
  it('properly returns a collection of all the values that exist in the linked list', () => {
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insert(5);
    expect(linkedList.toString()).toEqual('5 -> 4 -> 3 -> 2 -> 1 -> 0');
  });
});
