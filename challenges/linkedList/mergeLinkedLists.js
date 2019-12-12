const { LinkedList, Node } = require('./LinkedList');

const mergeLinkedLists = (list1, list2) => {
  const list3 = new LinkedList();
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;

  


};

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();

linkedList1.insert(2);
linkedList1.insert(4);
linkedList1.insert(6);
linkedList2.insert(1);
linkedList2.insert(3);
linkedList2.insert(5);

mergeLinkedLists(linkedList1, linkedList2);
