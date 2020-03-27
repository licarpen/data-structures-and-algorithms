const { LinkedList } = require('./LinkedList');

describe('LinkedList Class', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });
  it('successfully instantiates an empty linked list', () => {
    expect(linkedList.head).toBeNull();
  });
  it('properly inserts into the linked list', () => {
    linkedList.insert(0);
    expect(linkedList.head).toEqual({ 'next': null, 'value': 0 }); 
  });
  it('is such that the head property will properly point to the first node in the linked list', () => {
    linkedList.insert(0);
    expect(linkedList.head).toEqual({ 'next': null, 'value': 0 });
  });
  it('properly inserts multiple nodes into the linked list', () => {
    linkedList.insert(1);
    linkedList.insert(2);
    let lastNode = linkedList.head.next;
    expect(lastNode.value).toEqual(1);
    expect(linkedList.length).toEqual(2);
  });
  it('returns true when finding a value within the linked list that exists', () => {
    linkedList.insert(1);
    expect(linkedList.includes(1)).toBeTruthy();
  });
  it('returns false when searching for a value in the linked list that does not exist', () => {
    expect(linkedList.includes(4)).toBeFalsy();
  });
  it('properly returns a collection of all the values that exist in the linked list', () => {
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.toString()).toEqual('3 -> 2 -> 1 -> [x]');
  });
  it('successfully adds a node to the end of the linked list', () => {
    linkedList.insert(0);
    linkedList.append(1);
    expect(linkedList.includes(1)).toBeTruthy;
    expect(linkedList.toString()).toEqual('0 -> 1 -> [x]');
  });
  it('successfully adds multiple nodes to the end of a linked list', () => {
    linkedList.insert(0);
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.toString()).toEqual('0 -> 1 -> 2 -> [x]');
  });
  it('successfully inserts a node before a node located in the middle of a linked list', () => {
    linkedList.insert(2);
    linkedList.insert(0);
    linkedList.insertBefore(1, 2);
    expect(linkedList.toString()).toEqual('0 -> 1 -> 2 -> [x]');
  });  
  it('successfully inserts a node before the first node of a linked list', () => {
    linkedList.insert(1);
    linkedList.insert(0);
    linkedList.insertBefore(-1, 0);
    expect(linkedList.toString()).toEqual('-1 -> 0 -> 1 -> [x]');
  });
  it('successfully inserts after a node in the middle of the linked list', () => {
    linkedList.insert(2);
    linkedList.insert(0);
    linkedList.insertAfter(1, 0);
    expect(linkedList.toString()).toEqual('0 -> 1 -> 2 -> [x]');
  });

  it('successfully inserts a node after the last node of the linked list', () => {
    linkedList.insert(1);
    linkedList.insert(0);
    linkedList.insertAfter(2, 1);
    expect(linkedList.toString()).toEqual('0 -> 1 -> 2 -> [x]');
  });

  it('throws error when attempt is made to return kth element from a k-1 size list', () => {
    linkedList.insert(0);
    expect(linkedList.kFromEnd(2)).toEqual('encountered an error');});

  it('throws error when attempt is made to return element 3rd from end for list size 2', () => {
    linkedList.insert(1);
    linkedList.insert(0);
    expect(linkedList.kFromEnd(2)).toEqual('encountered an error');
  });

  it('throws an error when attempt is made to return the -kth element from the end (k>0)', () => {
    linkedList.insert(1);
    expect(linkedList.kFromEnd(-2)).toEqual('encountered an error');
  });

  it('returns the value of element 0 elements from the end', () => {
    linkedList.insert(1);
    linkedList.insert(0);
    expect(linkedList.kFromEnd(0)).toEqual(1);
  });

  it('returns the value of the node kth from the end and in the middle of the list', () => {
    linkedList.insert(2);
    linkedList.insert(1);
    linkedList.insert(0);
    expect(linkedList.kFromEnd(1)).toEqual(1);
  });

  it('removes duplicate values from a linked list', () => {
    linkedList.insert(2);
    linkedList.insert(1);
    linkedList.insert(0);
    linkedList.insert(1);
    linkedList.insert(0);
    linkedList.insert(0);
    linkedList.removeDuplicates();
    expect(linkedList.toString()).toEqual('0 -> 1 -> 2 -> [x]');
  });
});
