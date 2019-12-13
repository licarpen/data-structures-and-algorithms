const { LinkedList } = require('./LinkedList');
const { mergeLinkedLists } = require('./mergeLinkedLists');

describe('Linked List Unsorted Merge', () => {
  const linkedList1 = new LinkedList();
  const linkedList2 = new LinkedList();
  linkedList1.insert(0);
  linkedList1.insert(2);
  linkedList1.insert(4);
  linkedList1.insert(6);
  linkedList2.insert(1);
  linkedList2.insert(3);
  linkedList2.insert(5);
  mergeLinkedLists(linkedList1, linkedList2);
  it('successfully merges two linked lists', () => {
    expect(linkedList1.toString()).toEqual('6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> [x]');
  });
});
