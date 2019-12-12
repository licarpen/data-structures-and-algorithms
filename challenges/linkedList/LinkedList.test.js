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
  it('successfully adds a node to the end of the linked list', () => {
    linkedList.append(10);
    expect(linkedList.includes(10)).toBeTruthy;
    expect(linkedList.toString()).toEqual('5 -> 4 -> 3 -> 2 -> 1 -> 0 -> 10');
  });
  it('successfully adds multiple nodes to the end of a linked list', () => {
    linkedList.append(11);
    linkedList.append(12);
    expect(linkedList.toString()).toEqual('5 -> 4 -> 3 -> 2 -> 1 -> 0 -> 10 -> 11 -> 12');
  });
  it('successfully inserts a node before a node located in the middle of a linked list', () => {
    linkedList.insertBefore(9, 10);
    expect(linkedList.toString()).toEqual('5 -> 4 -> 3 -> 2 -> 1 -> 0 -> 9 -> 10 -> 11 -> 12');
  });  
  it('successfully inserts a node before the first node of a linked list', () => {
    linkedList.insertBefore(6, 5);
    expect(linkedList.toString()).toEqual('6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> 9 -> 10 -> 11 -> 12');
  });
  it('successfully inserts after a node in the middle of the linked list', () => {
    linkedList.insertAfter(1, 0);
    expect(linkedList.toString()).toEqual('6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> 1 -> 9 -> 10 -> 11 -> 12');
  });

  it('successfully inserts a node after the last node of the linked list', () => {
    linkedList.insertAfter(13, 12);
    expect(linkedList.toString()).toEqual('6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> 1 -> 9 -> 10 -> 11 -> 12 -> 13');
  });

  const linkedList2 = new LinkedList();
  linkedList2.insert(3);

  it('throws error when attempt is made to return kth element from a k-1 size list', () => {
    expect(linkedList2.kFromEnd(2)).toEqual('encountered an error');});

  it('throws error when attempt is made to return element 3rd from end for list size 2', () => {
    expect(linkedList2.kFromEnd(2)).toEqual('encountered an error');
  });

  it('throws an error when attempt is made to return the -kth element from the end (k>0)', () => {
    expect(linkedList2.kFromEnd(-2)).toEqual('encountered an error');
  });

  it('returns the value of element 0 elements from the end', () => {
    expect(linkedList.kFromEnd(0)).toEqual(13);
  });

  it('returns the value of the node kth from the end and in the middle of the list', () => {
    expect(linkedList.kFromEnd(3)).toEqual(10);
  });
});
